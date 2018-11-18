<?php 
require 'config.php';

function getHeadImg($idx) {
  global $headImgs;
  $idx = $idx ? $idx : 0;
  return $headImgs[$idx % count($headImgs)];
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

$mysqli = new mysqli(dbHost, dbUser, dbPassword, dbName) or die(err(1, '数据库连接失败'));
$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

/*query('TRUNCATE TABLE user');
$arr = ['摘星fy', '草莓', '菠萝', '芒果', '杏er', '李子', '木瓜', '哈密瓜', '山竹', '樱桃', '香蕉', '芒果', '火龙果', '香梨', '山楂', '橘子', '桂圆', '葡萄', '荔枝', '苹果', '香梨', '脐橙', '樱桃', '山竹', '榴莲', '芒果', '草莓'];
foreach ($arr as $key => $value) {
  query("INSERT INTO user (
    name,
    password,
    description,
    email,
    level,
    time
  ) VALUES (
    '".$value."',
    '".hash('sha256', '123123')."',
    '".$value." 和一群好人在一个阳光灿烂的日子里干一件事',
    'test-".($key + 1)."@codding.cn',
    ".(($key + 9) % 10).",
    ".(time() + $key)."
  )");
}*/