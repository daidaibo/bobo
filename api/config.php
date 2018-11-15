<?php 
error_reporting(0);
session_start();
header('Access-Control-Allow-Origin:*');
header('Content-Type: text/html; Charset=utf-8');

$mysqli = new mysqli('localhost', 'root', 'root', 'bobo') or die(err(1, '数据库连接失败'));
$mysqli->set_charset('UTF8') or die(err(1, '字符集设置失败'));

$secretKey = '';

function res($data) {
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}

function err($code, $msg) {
  echo json_encode([
    'code'=>$code,
    'msg'=>$msg,
  ], JSON_UNESCAPED_UNICODE);
  exit;
}

err(0, 'hello');