<?php 
require 'config.php';

function getHeadImg($idx) {
  global $headImgs;
  $idx = $idx ? $idx : 0;
  $idx %= 238;
  return 'http://'.$_SERVER['SERVER_NAME'].'/bobo/headImg/'.$idx.'.jpg';
}

function query($sql) {
  global $mysqli;
  return $mysqli->query($sql);
}

function queryRow($sql) {
  return query($sql)->fetch_assoc();
}

function queryRowArray($sql) {
  return query($sql)->fetch_row();
}

function queryData($sql) {
  global $mysqli;
  $result = query($sql);
  $data = [];
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  return $data;
}

function err($code, $msg) {
  echo json_encode(array(
    'code'=> $code,
    'msg'=> $msg
  ), JSON_UNESCAPED_UNICODE);
  exit;
}

function res($data) {
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}

function sha256($str) {
  return hash('sha256', $str);
}

function checkUid() {
  if (!$_SESSION['uid']) {
    err(1, 'no uid out...');
  }
  $uid = $_SESSION['uid'];
  unset($_SESSION['uid']);
  return sha256($uid);
}

function checkUidByPub() {
  $uid = checkUid();

  if ($uid !== $_REQUEST['pub']) {
    err(2, 'checkUidByPub 验证失败');
  }

  return $uid;
}

function checkLogin() {
  if (!$_SESSION['user']) {
    err(2, '请登录');
  }
}

function checkAdmin() {
  checkLogin();

  if ($_SESSION['user']['level'] != 9) {
    err(2, 'admin no permission ...');
  }
}

function getUserInfo($id) {
  $row = queryRow("SELECT * FROM user WHERE id=$id LIMIT 1");
  $row['password'] = '';
  $row['headImg'] = getHeadImg($id);
  $_SESSION['user'] = $row;
  if ($_SESSION['user']['level'] == 0) err(2, '不和你玩...');
  return $row;
}

$mysqli = new mysqli(dbHost, dbUser, dbPassword, dbName) or die(err(1, '数据库连接失败'));
$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

if ($_SESSION['user']) {
  getUserInfo($_SESSION['user']['id']);
}

$user = $_SESSION['user'];
$isAdmin = $_SESSION['user']['level'] == 9;
