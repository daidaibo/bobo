<?php 
define('salt', 'fb0d2a6aa58882e136b1e6ecd4aa61116cb7a6c4fec793e51ea3587969973a2d');
define('isLocal', in_array($_SERVER['SERVER_NAME'], ['10.4.10.41', '192.168.1.107', 'localhost']));
define('dbHost', isLocal ? $_SERVER['SERVER_NAME'] : 'qdm216595431.my3w.com');
define('dbUser', isLocal ? 'root' : 'qdm216595431');
define('dbPassword', isLocal ? 'root' : 'tianshihua');
define('dbName', isLocal ? 'bobo' : 'qdm216595431_db');

session_start();
// error_reporting(isLocal ? 1 : 0);
// error_reporting(1);
header('Content-Type: text/html; Charset=utf-8');
isLocal ? header('Access-Control-Allow-Origin: *') : '';