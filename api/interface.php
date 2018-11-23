<?php 
require 'common.php';


if ($_SESSION['user']) {
  $row = queryRow("SELECT level FROM user WHERE id=".$_SESSION['user']['id']." LIMIT 1");
  if ($row['level'] === '0') {
    err(2, '不和你玩！');
  }
}

switch ($_GET['a']) {
  case 'getUid':
    $uid = sha256(uniqid());
    $_SESSION['uid'] = $uid;
    res([
      'uid' => $uid,
    ]);
    break;
  case 'logout':
    session_destroy();
    err(0, '退出成功');
    break;
  case 'login':
    if (!$_GET['email'] || !$_GET['password']) {
      err(1, 'reg err 参数不全');
    }

    if (!$_SESSION['uid']) {
      err(1, 'no session uid');
    }

    $uid = $_SESSION['uid'];
    unset($_SESSION['uid']);
    $row = queryRow("SELECT * FROM user WHERE email='".$_GET['email']."' LIMIT 1");

    if (!$row) {
      err(2, '邮箱未注册');
      exit;
    }

    if ($row['level'] === '0') {
      err(2, '去去去，不和你玩');
    }
    
    if ($_GET['password'] !== hash('sha256', $row['password'].$uid)) {
      err(2, '密码错误');
    }
    
    unset($row['password']);
    $row['headImg'] = getHeadImg($row['id']);
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

    $count = $mysqli->query("SELECT COUNT(*) FROM user WHERE addr='".$_SERVER['REMOTE_ADDR']."' ")->fetch_array()[0];
    if ($count > 3) {
      err(2, '同一ip最多注册3个用户');
    }

    query("INSERT INTO user (
      email, password, addr, time
    ) VALUES (
      '".$_GET['email']."',
      '".$_GET['password']."',
      ".$_SERVER['REMOTE_ADDR'].",
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
    res($_SESSION['user']);
    break;
  case 'getDataDefault':
    $data = queryData("SELECT * FROM user LIMIT 30");
    foreach ($data as $key => $value) {
      unset($data[$key]['password']);
      unset($data[$key]['time']);
      $data[$key]['headImg'] = getHeadImg($value['id'] - 1);
    }
    res([
      'userInfo' => $_SESSION['user'],
      'userList' => $data,
    ]);
    break;
  case 'blog-get-list':
    res(queryData("SELECT * FROM blog WHERE belong='".$_GET['belong']."' ORDER BY id DESC"));
    break;
}


if (!$_SESSION['user']) {
  err(100, '请登录');
  exit;
}

switch ($_POST['a']) {
  case 'blog-add':
    if (!$_GET['author'] || !$_GET['belong'] || !$_GET['title'] || !$_GET['description'] || !$_GET['content'] || !$_GET['tags']) {
      err(1, '参数不全');
    }

    $_GET['pid'] = $_GET['pid'] ? $_GET['pid'] : 0;

    query("
      INSERT INTO blog (
        pid,
        author,
        belong,
        title,
        description,
        content,
        tags,
        time
      ) VALUES (
        '".$_GET['pid']."',
        '".$_GET['author']."',
        '".$_GET['belong']."',
        '".$_GET['title']."',
        '".$_GET['description']."',
        '".$_GET['content']."',
        '".$_GET['tags']."',
        ".time()."
      )
    ");

    $insertId = $mysqli->insert_id;

    res(queryRow("SELECT * FROM blog WHERE id=$insertId LIMIT 1 "));
    break;
}