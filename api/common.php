<?php 
require 'config.php';

function query($sql) {
  global $mysqli;
  return $mysqli->query($sql) or die(err(1, 'sql err: '.$sql));
}

function queryRow($sql) {
  return query($sql)->fetch_assoc();
}

function queryRowArray($sql) {
  return query($sql)->fetch_row();
}

function queryData($sql) {
  $result = query($sql);
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  return $data;
}

function queryDataArray($sql) {
  global $mysqli;
  $data = array();
  $result = $mysqli->query($sql);
  while ($row = $result->fetch_array()) {
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

$mysqli = new mysqli(dbHost, dbUser, dbPassword, dbName) or die(err(1, '数据库连接失败'));
$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

$mysqli->query("truncate table user");
$names = ['摘星fy', '草莓', '菠萝', '芒果', '杏', '李子', '西瓜', '木瓜', '哈密瓜', '山竹', '樱桃', '香蕉', '芒果', '火龙果', '苹果', '香梨', '山楂', '橘子', '桂圆', '葡萄', '荔枝', '芦柑', '苹果', '香梨', '脐橙', '樱桃', '山竹', '榴莲', '芒果', '草莓'];

foreach ($names as $key => $value) {
  $mysqli->query("insert into user (
    name,
    password,
    email,
    level,
    description,
    time
  ) values (
    '".$value."',
    '".hash('sha256', '123123')."',
    '".$value."@codding.cn',
    9,
    '".$value." 在阳光灿烂的日子里，和一群好人度过',
    ".(time() + $key)."
  )") or die('sql die');
}