<?php 
require 'common.php';

if ($_SESSION['user']) {
  $row = queryRow("SELECT * FROM user WHERE id=".$_SESSION['user']['id']." LIMIT 1");
  if ($row['level'] === '0') {
    err(2, '不和你玩！');
  }
  $row['password'] = '';
  $row['headImg'] = getHeadImg($row['id']);
  $_SESSION['user'] = $row;
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
    $uid = checkUid();

    if (!$_GET['email'] || !$_GET['password']) {
      err(1, 'reg err 参数不全');
    }

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

    $_SESSION['user'] = $row;
    err(0, '登录成功');
    break;
  case 'reg':
    checkUid();

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
    $_SESSION['user'] = queryRow("SELECT * FROM user WHERE id=".$insertId." LIMIT 1");
    err(0, '注册成功');
    break;
  case 'getUserInfo':
    $_SESSION['user'] ? res($_SESSION['user']) : err(0, '请登录');
    break;
  case 'getAllUser':
    $data = queryData("SELECT * FROM user LIMIT 30");
    foreach ($data as $key => $value) {
      $data[$key]['password'] = '';
      $data[$key]['headImg'] = getHeadImg($value['id']);
    }
    res($data);
    break;
  case 'blog-del':
    $row = queryRow("SELECT author FROM blog WHERE id='".$_GET['blogId']."' LIMIT 1");
    if (!($row['author'] === $_SESSION['user']['id'] || $_SESSION['user']['level'] == 9)) {
      err(1, 'blog-del 无权操作');
    }
    $mysqli->query("DELETE FROM blog WHERE id='".$_GET['blogId']."' LIMIT 1");
    err(0, '操作成功');
    break;
  case 'blog-get-list':
    $data = queryData("SELECT * FROM blog WHERE belong='".$_GET['belong']."' ORDER BY id DESC");
    foreach ($data as $key => $value) {
      unset($data[$key]['content']);
    }
    res($data);
    break;
  case 'blog-get-info':
    if (!$_GET['blogId']) {
      err(1, '参数不全');
    }
    res(queryRow("SELECT * FROM blog WHERE id='".$_GET['blogId']."' LIMIT 1 "));
    break;
}


if (!$_SESSION['user']) {
  err(2, '请登录');
  exit;
}

switch ($_POST['a']) {
  case 'update-user-info':
    checkUidByPub();

    if (!$_POST['name']) {
      err(1, 'update-user-info 参数不全');
    }

    $_POST['sex'] = $_POST['sex'] ? $_POST['sex'] : '0';

    $mysqli->query("UPDATE user SET
      name='".$_POST['name']."',
      sex='".$_POST['sex']."',
      description='".$_POST['description']."',
      url='".$_POST['url']."',
      buss='".$_POST['buss']."',
      bussUrl='".$_POST['bussUrl']."'
      WHERE
      id='".$_SESSION['user']['id']."'
      LIMIT 1
    ") or die(err(2, '用户信息修改失败'));

    err(0, '修改成功');
    break;
  case 'update-password':
    checkUidByPub();

    $row = queryRow("SELECT * FROM user WHERE id='".$_SESSION['user']['id']."' LIMIT 1");

    if ($row['password'] !== $_POST['passOrigin']) {
      err(2, '当前密码错误');
    }

    query("UPDATE user SET password='".$_POST['newPass']."' WHERE id='".$_SESSION['user']['id']."' LIMIT 1");

    err(0, '密码修改成功');
    break;
  case 'blog-add':
    checkUidByPub();

    if (!$_POST['belong'] || !$_POST['title'] || !$_POST['description'] || !$_POST['content'] || !$_POST['tags']) {
      err(1, '参数不全');
    }

    $_POST['pid'] = $_POST['pid'] ? $_POST['pid'] : 0;
    $row = queryRow("SELECT id FROM blog WHERE title='".$_POST['title']."' LIMIT 1 ");

    if ($row['id']) {
      res(['alreadyHave' => true, 'row' => $row]);
    }

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
        '".$_POST['pid']."',
        '".$_SESSION['user']['id']."',
        '".$_POST['belong']."',
        '".$_POST['title']."',
        '".$_POST['description']."',
        '".$_POST['content']."',
        '".$_POST['tags']."',
        ".time()."
      )
    ");

    $insertId = $mysqli->insert_id;
    res(queryRow("SELECT * FROM blog WHERE id=$insertId LIMIT 1 "));
    break;
  case 'blog-update':
    checkUidByPub();

    if (!$_POST['blogId'] || !$_POST['belong'] || !$_POST['title'] || !$_POST['description'] || !$_POST['content'] || !$_POST['tags']) {
      err(1, '参数不全');
    }

    $row = queryRow("SELECT id FROM blog WHERE title='".$_POST['title']."' AND id!='".$_POST['blogId']."' LIMIT 1 ");
    if ($row['id']) {
      err(2, '标题已存在，改一下');
    }

    $row = queryRow("SELECT * FROM blog WHERE id='".$_POST['blogId']."' LIMIT 1 ");
    if (!($row['author'] === $_SESSION['user']['id'] || $_SESSION['user']['level'] == 9)) {
      err(1, '无权操作');
    }

    $mysqli->query("UPDATE blog SET
      belong='".$_POST['belong']."',
      title='".$_POST['title']."',
      description='".$_POST['description']."',
      content='".$_POST['content']."',
      tags='".$_POST['tags']."'
      WHERE
      id='".$_POST['blogId']."'
      LIMIT 1
    ") or die(err(2, '编辑失败'));

    err(0, '操作成功');
    break;
}