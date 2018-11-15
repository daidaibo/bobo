<?php 
require 'config.php';

if (!$_SESSION['user']) {
  err(1, '请登录');
  exit;
}