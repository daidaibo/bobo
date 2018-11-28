<?php 
require 'common.php';

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

switch ($_REQUEST['a']) {
  case 'logout':
    session_destroy();
    err(0, '退出成功');
    break;
  case 'login':
    $uid = checkUid();
    if (!$email || !$password) err(1, 'login err 缺少参数');
    $row = queryRow("SELECT * FROM user WHERE email='{$email}' LIMIT 1");
    if (!$row['id']) err(2, '邮箱未注册');
    $result = sha256($row['password'].$uid);
    if ($password !== $result) err(2, '用户名或密码错误');
    if ($row['level'] == 0) {
      session_destroy();
      err(2, '账号异常');
    }

    $_SESSION['user'] = $row;
    res(getUserInfo($row['id']));
    break;
  case 'reg':
    checkUidByPub();
    if (!$email || !$password) err(1, 'reg err 缺少参数');
    $count = queryRowArray("SELECT COUNT(*) FROM user WHERE addr='{$_SERVER['REMOTE_ADDR']}' ")[0];
    if ($count > 3) err(2, '同一ip最多注册3个账户');
    $row = queryRow("SELECT id FROM user WHERE email='{$email}' LIMIT 1");
    if ($row['id']) err(2, '邮箱已注册');

    $mysqli->query("INSERT INTO user (
      password,
      email,
      addr,
      time
    ) VALUES (
      '{$password}',
      '{$email}',
      '{$_SERVER['REMOTE_ADDR']}',
      ".time()."
    )");

    $insertId = $mysqli->insert_id;
    $mysqli->query("UPDATE user SET name='未命名-{$insertId}' WHERE id=$insertId LIMIT 1");
    res(getUserInfo($insertId));
    break;
  case 'user-info':
    if (!$_SESSION['user']) err(0, '未登录');
    res($_SESSION['user']);
    break;
  case 'user-list':
    $data = queryData("SELECT * FROM user");
    foreach ($data as $key => $value) {
      $data[$key]['password'] = '';
      $data[$key]['headImg'] = getHeadImg($value['id']);
    }
    res($data);
    break;
  case 'user-update-password':
    checkLogin();
    $uid = checkUid();

    if (!$_REQUEST['passOld'] || !$_REQUEST['passNew']) err(1, 'user-update-password err 缺少参数');

    $row = queryRow("SELECT * FROM user WHERE id={$_SESSION['user']['id']} LIMIT 1");
    $result = sha256($row['password'].$uid);
    if ($_REQUEST['passOld'] !== $result) err(2, '原始密码错误');
    $mysqli->query("UPDATE user SET password='{$_REQUEST['passNew']}' WHERE id={$_SESSION['user']['id']} LIMIT 1") or die(err(2, '密码修改失败'));

    err(0, '密码修改成功');
    break;
}