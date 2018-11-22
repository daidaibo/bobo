<?php 
require 'common.php';

/*if ($_SESSION['user']) {
  $row = queryRow("SELECT level FROM user WHERE id=".$_SESSION['user']['id']." LIMIT 1");
  if ($row['level'] === '0') {
    err(2, '不和你玩！');
  }
}*/

switch ($_GET['a']) {
  case 'logout':
    session_destroy();
    err(0, '退出成功');
    break;
  case 'login':
    if (!$_GET['email'] || !$_GET['password'] || !$_GET['uid']) {
      err(1, 'reg err 参数不全');
    }

    $maxLen = 10e4;
    $filename = 'no-repeat.uid';
    $arrNoRepeat = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];

    if (count($arrNoRepeat) > $maxLen) {
      $arrNoRepeat = [];
    }

    if (in_array($_GET['uid'], $arrNoRepeat)) {
      err(1, 'out...');
    }

    array_push($arrNoRepeat, $_GET['uid']);
    file_put_contents($filename, json_encode($arrNoRepeat, JSON_UNESCAPED_UNICODE));

    $row = queryRow("SELECT * FROM user WHERE email='".$_GET['email']."' LIMIT 1");
    
    if (!$row) {
      err(2, '邮箱未注册');
      exit;
    }

    if ($row['level'] === '0') {
      err(2, '去去去，不和你玩');
    }
    
    if ($_GET['password'] !== hash('sha256', $row['password'].$_GET['uid'])) {
      err(2, '密码错误');
    }

    unset($row['password']);
    $row['headImg'] = getHeadImg($row['id'] - 1);
    $_SESSION['user'] = $row;
    res($row);
    break;
  case 'reg':
    if (!$_GET['email'] || !$_GET['password']) {
      err(1, 'reg err 参数不全');
    }

    $row = queryRow("SELECT id FROM user WHERE email='".$_GET['email']."' LIMIT 1 ");

    if ($row['id']) {
      err(2, '邮箱已注册');
    }

    query("INSERT INTO user (
      email, password, time
    ) VALUES (
      '".$_GET['email']."',
      '".$_GET['password']."',
      ".time()."
    )");

    $insertId = $mysqli->insert_id;

    query("UPDATE user SET name='未命名-$insertId' WHERE id=$insertId LIMIT 1 ");
    $row = queryRow("SELECT * FROM user WHERE id=".$insertId." LIMIT 1");
    unset($row['password']);
    $row['headImg'] = getHeadImg($row['id'] - 1);
    $_SESSION['user'] = $row;
    res($row);
    break;
  case 'getUserInfo':
    res($_SESSION['user'] ? $_SESSION['user'] : [
      'id' => '',
      'name' => '',
      // 'password' => '',
      'description' => '',
      'email' => '',
      'level' => '',
      'time' => '',
      'headImg' => getHeadImg($_SESSION['user']['id']),
    ]);
    break;
  case 'getDataDefault':
    $data = queryData("SELECT id, name FROM user");
    foreach ($data as $key => $value) {
      unset($data[$key]['password']);
      $data[$key]['headImg'] = getHeadImg($value['id'] - 1);
    }
    res([
      'userInfo' => $_SESSION['user'],
      'userList' => $data,
    ]);
    break;
  case 'article-get-list':
    res(queryData("SELECT * FROM article ORDER BY id DESC"));
    break;
}


if (!$_SESSION['user']) {
  err(100, '请登录');
  exit;
}

switch ($_POST['a']) {
  case 'article-add':
    if (!$_POST['title'] || !$_POST['tags'] || !$_POST['description']) {
      err(1, '缺少参数');
    }

    $row = queryRow("SELECT id FROM article WHERE title='".$_POST['title']."' LIMIT 1");

    if ($row['id']) {
      err(2, '这个问题问过了');
    }

    query("INSERT INTO article (
      title, tags, description, author, time
    ) VALUES (
      '".$_POST['title']."',
      '".$_POST['tags']."',
      '".$_POST['description']."',
      '".$_SESSION['user']['id']."',
      ".time()."
    )");

    $insertId = $mysqli->insert_id;
    res(queryRow("SELECT * FROM article WHERE id=$insertId LIMIT 1 "));
    break;
}