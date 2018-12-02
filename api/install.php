<?php 
require './config.php';

$mysqli = new mysqli(dbHost, dbUser, dbPassword) or die(err(1, '数据库连接失败'));
$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));

$sql = file_get_contents('./sql.sql');
echo $sql;
$mysqli->query($sql) or die('数据导入失败');