<?php 
require 'common.php';

switch ($_REQUEST['a']) {
  case 'blog-info':
    if (!$_REQUEST['blogId']) err(1, 'blog-info no blogId');
    $data = queryRow("SELECT * FROM blog WHERE id={$_REQUEST['blogId']} LIMIT 1");
    if (!$data) err(2, '文章不存在');
    query("UPDATE blog SET blog.read=blog.read+1 WHERE id={$_REQUEST['blogId']} LIMIT 1");
    if ($_SESSION['user']['id']) {
      $path = './visited';
      if (!is_dir($path)) mkdir($path);
      $path.='/1.visited';
      if (!file_exists($path)) file_put_contents($path, '');
      $arr = json_decode(file_get_contents($path), true);
      $arr = $arr ? $arr : [];
      if ($arr[0]['id'] === $data['id']) {
        $arr[0]['time'] = time();
      } else {
        array_unshift($arr, [
          'id' => $data['id'],
          'title' => $data['title'],
          'time' => time(),
        ]);
      }
      file_put_contents($path, json_encode($arr, JSON_UNESCAPED_UNICODE));
    }
    res($data);
    break;
  case 'blog-list':
    $data = queryData("SELECT * FROM blog ORDER BY id DESC");
    foreach ($data as $key => $value) {
      unset($data[$key]['content']);
    }
    res($data);
    break;
}

checkLogin();

switch ($_REQUEST['a']) {
  case 'blog-remove':
    if (!$_REQUEST['blogId']) err(1, 'blog-remove err no blogId');
    if (!$isAdmin) {
      $row = queryRow("SELECT id, author FROM blog WHERE id={$_REQUEST['blogId']} LIMIT 1");
      if (!$row['id']) err(2, '没找到相关记录');
      if ($row['author'] !== $user['id']) err(2, '无权操作');
    }
    
    $mysqli->query("DELETE FROM blog WHERE id={$_REQUEST['blogId']} LIMIT 1") or die(err(2, '删除失败'));
    err(0, $mysqli->affected_rows > 0 ? '删除成功' : '没有任何变化');
    break;
  case 'blog-add':
    if (!$_REQUEST['title'] || !$_REQUEST['description'] || !$_REQUEST['tags'] || !$_REQUEST['content']) err(1, 'blog-add err 参数不全');
    $row = queryRow("SELECT id FROM blog WHERE title='{$_REQUEST['title']}' LIMIT 1");
    if ($row['id']) err(0, ['alreadyHave'=>true, 'id'=>$row['id']]);

    $mysqli->query("INSERT INTO blog (
      pid,
      author,
      belong,
      title,
      description,
      content,
      tags,
      time
    ) VALUES (
      '{$_REQUEST['pid']}',
      '{$user['id']}',
      'aw',
      '{$_REQUEST['title']}',
      '{$_REQUEST['description']}',
      '{$_REQUEST['content']}',
      '{$_REQUEST['tags']}',
      ".time()."
    )") or die(err(2, 'blog写入失败'));

    $insertId = $mysqli->insert_id;
    res(queryRow("SELECT * FROM blog WHERE id={$insertId} LIMIT 1"));
    break;
  case 'blog-update':
    if (!$_REQUEST['blogId'] || !$_REQUEST['title'] || !$_REQUEST['description'] || !$_REQUEST['tags'] || !$_REQUEST['content']) err(1, 'blog-add err 参数不全');

    if (!$isAdmin) {
      $row = queryRow("SELECT author FROM blog WHERE id={$_REQUEST['blogId']} LIMIT 1");
      if ($row['author'] != $user['id']) err(2, '无权操作');

      $row = queryRow("SELECT id FROM blog WHERE title='{$_REQUEST['title']}' AND author!={$user['id']} LIMIT 1");
      if ($row['id']) err(2, '标题已存在');
    }

    $mysqli->query("UPDATE blog SET
      pid='{$_REQUEST['pid']}',
      belong='{$_REQUEST['belong']}',
      title='{$_REQUEST['title']}',
      description='{$_REQUEST['description']}',
      content='{$_REQUEST['content']}',
      tags='{$_REQUEST['tags']}'
      WHERE
      id={$_REQUEST['blogId']}
      LIMIT 1
    ") or die(err(2, 'blog修改失败'));

    res(queryRow("SELECT * FROM blog WHERE id={$_REQUEST['blogId']} LIMIT 1"));
    break;
}