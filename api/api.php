<?php 
require 'common.php';

switch ($_REQUEST['a']) {
  case 'get-uid':
    $uid = sha256(uniqid());
    $_SESSION['uid'] = $uid;
    res(['uid' => $uid]);
    break;
}