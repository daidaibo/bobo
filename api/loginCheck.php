<?php 
require 'common.php';

if (!$_SESSION['user']) {
  err(100, '请登录');
  exit;
}