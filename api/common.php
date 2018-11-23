<?php 
require 'config.php';

function getHeadImg($idx) {
  global $headImgs;
  $idx = $idx ? $idx : 0;
  $idx %= 162;
  return 'http://'.$_SERVER['SERVER_NAME'].'/bobo/headImg/'.$idx.'.jpg';
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

function sha256($str) {
  return hash('sha256', $str);
}


$mysqli = new mysqli(dbHost, dbUser, dbPassword, dbName) or die(err(1, '数据库连接失败'));
$mysqli->query("SET NAMES UTF8") or die(err(1, '字符集设置失败'));



/*query('TRUNCATE TABLE user');

$arr = ['摘星fy', '草莓', '菠萝', '芒果', '杏er', '李子', '木瓜', '哈密瓜', '山竹', '樱桃', '香蕉', '芒果', '火龙果', '香梨', '山楂', '橘子', '桂圆', '葡萄', '荔枝', '苹果', '香梨', '脐橙', '樱桃', '山竹', '榴莲', '芒果', '草莓'];
$buss = ['思领科技', '冠贝科技', '木凤科技', '富翔科技', '科宝科技', '韦至科技', '克伟科技', '斯先科技', '惠基科技', '中环科技', '奇士科技', '冠星科技', '中立科技', '雅玉科技', '清电科技', '诚清科技', '美友科技', '华耀科技', '贸电科技', '娇倍科技', '奇凤科技', '发频科技', '艾航科技', '卓名科技', '荣清科技', '升帝科技', '用好科技', '尔聚科技', '汇霆科技', '润帝科技'];

foreach ($arr as $key => $value) {
  query("INSERT INTO user (
    name,
    password,
    description,
    email,
    url,
    bussUrl,
    buss,
    level,
    addr,
    time
  ) VALUES (
    '".$value."',
    '".hash('sha256', '123123')."',
    '".$value." 和一群好人在一个阳光灿烂的日子里干一件事',
    'test-".($key + 1)."@codding.cn',
    'http://codding.cn',
    'http://codding.cn',
    '".$buss[$key]."',
    ".(($key + 9) % 10).",
    '".$_SERVER['REMOTE_ADDR']."',
    ".(time() + $key)."
  )");
}*/



/*
query("TRUNCATE TABLE blog");
$arr = [[
  'title' => '刀工好仅仅是为了炫技吗？',
  'description' => '马蓉发这个流水的目的，也就是在拿这个说事，马蓉说宝强没钱打官司，是说谎，你看起诉当天余额有 200 多万呢，马蓉微博还说更何况自己名下有公司，还有表哥、表姐，说自己没钱就是在愚弄大众。',
],
[
  'title' => '程序员为什么喜欢用谷歌浏览器？',
  'description' => '殇小辛： 快去领，我抢到了20多块！ 如果你看到这张图的第一反应不是打开支付宝搜索这个号码，而且先去微博搜索下王思聪的微博，恭喜你，',
],
[
  'title' => 'iPhone XS Max 的实际体验如何？',
  'description' => 'Warkeeper： 我是白色款64g，加了apple care+，所以没带套用了两周左右。 我原来是iphone6，也不带套，换了之后感觉根本不是一个ios设备，提升比当年4s换6大很多 首先是设备初始化…',
],
[
  'title' => '男生的求生欲很强是一种什么样的表现？',
  'description' => '匿名用户： 背景：我胸小，夏天不需内衣，只要两个创可贴就可以套T恤出门。 某天晚上，跟老公躺在床上各看手机，老公顺手过来摸胸，我随意自嘲说，是不是太小了…',
],
[
  'title' => 'Uzi 这名选手到底强在哪里？',
  'description' => 'Rinoa Heartilly： 以我多年混迹下路的经验来说，VN是个相当异类的家伙 前期线上很弱，清兵慢、手不算长 后期有了装备优势就基本能稳C 可不点迅捷步伐容易崩，点了的话又需要很长的发育时间 再怎么说三…',
],
[
  'title' => '普通人跟职业运动员到底有多大差距？',
  'description' => '愤怒的阿战： 刚刚结束的加拿大杯格斗游戏大赛，我国的职业玩家广州小孩曾卓君，拿到了三冠一亚的成绩。 我来说说其中一项，美少女战士的比赛。 小孩被一个老外玩家现场带着学玩了一下美少女战士，发现这个游戏挺好玩的…',
],
[
  'title' => '什么是整容的极限？',
  'description' => 'miss喵： 蔡明就是整容的极限。 对，就是春晚那个。 不信？ 跟我看几张照片。 右图均为蔡明老师，左图为这些年整容根本停不下来的女星们。 这几年越来越发现，感觉半个娱乐圈的女明星都在撞脸蔡明。 整容这条路走到尽头…',
],
[
  'title' => '健身能改变人的什么?',
  'description' => '其中她有一条微博发了张王宝强的银行卡流水，这张图看似没啥，但是在我看来信息量丰富啊，为了避免很多人看不懂，我还特意加了两个备注，请叫我贴心的小棉袄。',
],
[
  'title' => 'iPhone 有哪些非常有必要下载的 App？',
  'description' => '攻略共享： “Apple 支持” 步骤一：判断自己的电池是否需要换 方法：设置-电池-电池健康。 如果你买的手机在一年内电池容量就到了80%以下，可以去苹果售后免费更换新电池。 步骤二：预约换电池服务 1、app…',
],
[
  'title' => '练泰拳会短命吗？',
  'description' => '蛇颈龙： 是的，会短命。 泰拳是一项极度残忍的格斗项目。 残忍到什么程度呢？ 首先，泰国出生的孩子生下来的时候就要进行严酷的选拔，不适合打泰拳的小孩全部做成…',
],
[
  'title' => '腾讯都作了哪些恶？',
  'description' => '麻辣小龙虾： 我就回答一个，不是我个人经历，但是是身边人亲身经历的。 朋友2001年申请了一个QQ，六位数，当时挺普遍，现在来看，应该很值钱了。 大概是2…',
],
[
  'title' => '大家去健身房都是坚持多久练出肌肉的?',
  'description' => '黄伟杰： 刚开始，我真的以为可以三个月速成，转眼间已是三年之后又三年。 所有熬过的夜，醉过的酒，吃过的炸鸡汉堡薯条披萨，所有对身体造过的孽，都会成为一个个的减分项；而所有吃过的健康餐、在健身房流过的汗、学…',
]];

foreach ($arr as $key => $value) {
  query("INSERT INTO blog (
    title, description, belong, author, tags, time
  ) VALUES (
    '".$value['title']."',
    '".$value['description']."',
    'aw',
    '".($key+1)."',
    'js php mysql',
    ".time()."
  )");
}*/