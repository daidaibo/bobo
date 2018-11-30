<?php 
$path = './visited';
if (!is_dir($path)) mkdir($path);
$path.='/1.visited';
if (!file_exists($path)) file_put_contents($path, '');
$arr = json_decode(file_get_contents($path), true);
$arr = $arr ? $arr : [];
array_unshift($arr, ['id'=>1, 'title'=>'阳光灿烂的日子里']);
file_put_contents($path, json_encode($arr, JSON_UNESCAPED_UNICODE));