<?php 
error_reporting(0);
session_start();
header('Content-Type: text/html; Charset=utf-8');

if ($_SERVER['SERVER_NAME'] === 'localhost') {
  $mysqli = new mysqli('localhost', 'root', 'root', 'bobo') or die(err(1, '数据库连接失败'));
} else {
  $mysqli = new mysqli('qdm216595431.my3w.com', 'qdm216595431', 'tianshihua', 'qdm216595431_db') or die('mysql conn die');
}

$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

/*if ($_REQUEST['action'] == 'chooseDB' && $_REQUEST['dbName']) {
  $mysqli->select_db($_REQUEST['dbName']) or die(err(1, '数据库选择失败1'));
} else {
  if ($_SERVER['SERVER_NAME'] === 'localhost') {
    $mysqli->select_db('blog') or die(err(1, '数据库选择失败2'));
  } else {
    $mysqli->select_db('qdm216595431_db') or die(err(1, '数据库选择失败3'));
  }
}*/

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