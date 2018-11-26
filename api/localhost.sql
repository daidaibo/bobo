-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 �?11 �?26 �?18:02
-- 服务器版本: 5.5.40
-- PHP 版本: 5.6.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `bobo`
--
CREATE DATABASE `bobo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bobo`;

-- --------------------------------------------------------

--
-- 表的结构 `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(10) unsigned NOT NULL,
  `author` int(10) unsigned NOT NULL,
  `belong` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `tags` text NOT NULL,
  `read` int(10) unsigned NOT NULL,
  `agree` text NOT NULL,
  `disagree` text NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `blog`
--

INSERT INTO `blog` (`id`, `pid`, `author`, `belong`, `title`, `description`, `content`, `tags`, `read`, `agree`, `disagree`, `time`) VALUES
(1, 0, 1, 'aw', '刀工好仅仅是为了炫技吗？', '马蓉发这个流水的目的，也就是在拿这个说事，马蓉说宝强没钱打官司，是说谎，你看起诉当天余额有 200 多万呢，马蓉微博还说更何况自己名下有公司，还有表哥、表姐，说自己没钱就是在愚弄大众。', '', 'js php mysql', 0, '', '', 1542965118),
(2, 0, 2, 'aw', '程序员为什么喜欢用谷歌浏览器？', '殇小辛： 快去领，我抢到了20多块！ 如果你看到这张图的第一反应不是打开支付宝搜索这个号码，而且先去微博搜索下王思聪的微博，恭喜你，', '', 'js php mysql', 0, '', '', 1542965118),
(3, 0, 3, 'aw', 'iPhone XS Max 的实际体验如何？', 'Warkeeper： 我是白色款64g，加了apple care+，所以没带套用了两周左右。 我原来是iphone6，也不带套，换了之后感觉根本不是一个ios设备，提升比当年4s换6大很多 首先是设备初始化…', '', 'js php mysql', 0, '', '', 1542965118),
(4, 0, 4, 'aw', '男生的求生欲很强是一种什么样的表现？', '匿名用户： 背景：我胸小，夏天不需内衣，只要两个创可贴就可以套T恤出门。 某天晚上，跟老公躺在床上各看手机，老公顺手过来摸胸，我随意自嘲说，是不是太小了…', '', 'js php mysql', 0, '', '', 1542965118),
(5, 0, 5, 'aw', 'Uzi 这名选手到底强在哪里？', 'Rinoa Heartilly： 以我多年混迹下路的经验来说，VN是个相当异类的家伙 前期线上很弱，清兵慢、手不算长 后期有了装备优势就基本能稳C 可不点迅捷步伐容易崩，点了的话又需要很长的发育时间 再怎么说三…', '', 'js php mysql', 0, '', '', 1542965118),
(6, 0, 6, 'aw', '普通人跟职业运动员到底有多大差距？', '愤怒的阿战： 刚刚结束的加拿大杯格斗游戏大赛，我国的职业玩家广州小孩曾卓君，拿到了三冠一亚的成绩。 我来说说其中一项，美少女战士的比赛。 小孩被一个老外玩家现场带着学玩了一下美少女战士，发现这个游戏挺好玩的…', '', 'js php mysql', 0, '', '', 1542965118),
(7, 0, 7, 'aw', '什么是整容的极限？', 'miss喵： 蔡明就是整容的极限。 对，就是春晚那个。 不信？ 跟我看几张照片。 右图均为蔡明老师，左图为这些年整容根本停不下来的女星们。 这几年越来越发现，感觉半个娱乐圈的女明星都在撞脸蔡明。 整容这条路走到尽头…', '', 'js php mysql', 0, '', '', 1542965118),
(8, 0, 8, 'aw', '健身能改变人的什么?', '其中她有一条微博发了张王宝强的银行卡流水，这张图看似没啥，但是在我看来信息量丰富啊，为了避免很多人看不懂，我还特意加了两个备注，请叫我贴心的小棉袄。', '', 'js php mysql', 0, '', '', 1542965118),
(9, 0, 9, 'aw', 'iPhone 有哪些非常有必要下载的 App？', '攻略共享： “Apple 支持” 步骤一：判断自己的电池是否需要换 方法：设置-电池-电池健康。 如果你买的手机在一年内电池容量就到了80%以下，可以去苹果售后免费更换新电池。 步骤二：预约换电池服务 1、app…', '', 'js php mysql', 0, '', '', 1542965118),
(10, 0, 10, 'aw', '练泰拳会短命吗？', '蛇颈龙： 是的，会短命。 泰拳是一项极度残忍的格斗项目。 残忍到什么程度呢？ 首先，泰国出生的孩子生下来的时候就要进行严酷的选拔，不适合打泰拳的小孩全部做成…', '', 'js php mysql', 0, '', '', 1542965118),
(11, 0, 11, 'aw', '腾讯都作了哪些恶？', '麻辣小龙虾： 我就回答一个，不是我个人经历，但是是身边人亲身经历的。 朋友2001年申请了一个QQ，六位数，当时挺普遍，现在来看，应该很值钱了。 大概是2…', '', 'js php mysql', 0, '', '', 1542965118),
(12, 0, 12, 'aw', '大家去健身房都是坚持多久练出肌肉的?', '黄伟杰： 刚开始，我真的以为可以三个月速成，转眼间已是三年之后又三年。 所有熬过的夜，醉过的酒，吃过的炸鸡汉堡薯条披萨，所有对身体造过的孽，都会成为一个个的减分项；而所有吃过的健康餐、在健身房流过的汗、学…', '', '健身房', 0, '', '', 1542965118);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `sex` tinyint(1) NOT NULL DEFAULT '0',
  `password` char(64) NOT NULL,
  `description` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `birthday` int(11) NOT NULL DEFAULT '1',
  `level` tinyint(4) NOT NULL DEFAULT '1',
  `errCount` int(11) NOT NULL,
  `errTime` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `addr` varchar(15) NOT NULL,
  `buss` varchar(50) NOT NULL,
  `bussUrl` varchar(100) NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `sex`, `password`, `description`, `email`, `birthday`, `level`, `errCount`, `errTime`, `url`, `addr`, `buss`, `bussUrl`, `time`) VALUES
(1, '田士贞-摘星fy', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 'Hi Me', 'test-1@codding.cn', 1, 9, 0, 0, 'http://codding.cn', '10.4.10.41', '36氪', 'https://36kr.com/', 1542966065),
(2, '草莓', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '草莓 和一群好人在一个阳光灿烂的日子里干一件事', 'test-2@codding.cn', 1, 0, 0, 0, 'http://codding.cn', '10.4.10.41', '冠贝科技', 'http://codding.cn', 1542966066),
(3, '菠萝', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '菠萝 和一群好人在一个阳光灿烂的日子里干一件事', 'test-3@codding.cn', 1, 1, 0, 0, 'http://codding.cn', '10.4.10.41', '木凤科技', 'http://codding.cn', 1542966067),
(4, '芒果', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-4@codding.cn', 1, 2, 0, 0, 'http://codding.cn', '10.4.10.41', '富翔科技', 'http://codding.cn', 1542966068),
(5, '杏er', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '杏er 和一群好人在一个阳光灿烂的日子里干一件事', 'test-5@codding.cn', 1, 3, 0, 0, 'http://codding.cn', '10.4.10.41', '科宝科技', 'http://codding.cn', 1542966069),
(6, '李子', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '李子 和一群好人在一个阳光灿烂的日子里干一件事', 'test-6@codding.cn', 1, 4, 0, 0, 'http://codding.cn', '10.4.10.41', '韦至科技', 'http://codding.cn', 1542966070),
(7, '木瓜', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '木瓜 和一群好人在一个阳光灿烂的日子里干一件事', 'test-7@codding.cn', 1, 5, 0, 0, 'http://codding.cn', '10.4.10.41', '克伟科技', 'http://codding.cn', 1542966071),
(8, '哈密瓜', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '哈密瓜 和一群好人在一个阳光灿烂的日子里干一件事', 'test-8@codding.cn', 1, 6, 0, 0, 'http://codding.cn', '10.4.10.41', '斯先科技', 'http://codding.cn', 1542966072),
(9, '山竹', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山竹 和一群好人在一个阳光灿烂的日子里干一件事', 'test-9@codding.cn', 1, 7, 0, 0, 'http://codding.cn', '10.4.10.41', '惠基科技', 'http://codding.cn', 1542966073),
(10, '樱桃', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '樱桃 和一群好人在一个阳光灿烂的日子里干一件事', 'test-10@codding.cn', 1, 8, 0, 0, 'http://codding.cn', '10.4.10.41', '中环科技', 'http://codding.cn', 1542966074),
(11, '香蕉', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香蕉 和一群好人在一个阳光灿烂的日子里干一件事', 'test-11@codding.cn', 1, 9, 0, 0, 'http://codding.cn', '10.4.10.41', '奇士科技', 'http://codding.cn', 1542966075),
(12, '芒果', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-12@codding.cn', 1, 0, 0, 0, 'http://codding.cn', '10.4.10.41', '冠星科技', 'http://codding.cn', 1542966076),
(13, '火龙果', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '火龙果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-13@codding.cn', 1, 1, 0, 0, 'http://codding.cn', '10.4.10.41', '中立科技', 'http://codding.cn', 1542966077),
(14, '香梨', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香梨 和一群好人在一个阳光灿烂的日子里干一件事', 'test-14@codding.cn', 1, 2, 0, 0, 'http://codding.cn', '10.4.10.41', '雅玉科技', 'http://codding.cn', 1542966078),
(15, '山楂', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山楂 和一群好人在一个阳光灿烂的日子里干一件事', 'test-15@codding.cn', 1, 3, 0, 0, 'http://codding.cn', '10.4.10.41', '清电科技', 'http://codding.cn', 1542966079),
(16, '橘子', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '橘子 和一群好人在一个阳光灿烂的日子里干一件事', 'test-16@codding.cn', 1, 4, 0, 0, 'http://codding.cn', '10.4.10.41', '诚清科技', 'http://codding.cn', 1542966080),
(17, '桂圆', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '桂圆 和一群好人在一个阳光灿烂的日子里干一件事', 'test-17@codding.cn', 1, 5, 0, 0, 'http://codding.cn', '10.4.10.41', '美友科技', 'http://codding.cn', 1542966081),
(18, '葡萄', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '葡萄 和一群好人在一个阳光灿烂的日子里干一件事', 'test-18@codding.cn', 1, 6, 0, 0, 'http://codding.cn', '10.4.10.41', '华耀科技', 'http://codding.cn', 1542966082),
(19, '荔枝', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '荔枝 和一群好人在一个阳光灿烂的日子里干一件事', 'test-19@codding.cn', 1, 7, 0, 0, 'http://codding.cn', '10.4.10.41', '贸电科技', 'http://codding.cn', 1542966083),
(20, '苹果', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '苹果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-20@codding.cn', 1, 8, 0, 0, 'http://codding.cn', '10.4.10.41', '娇倍科技', 'http://codding.cn', 1542966084),
(21, '香梨', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香梨 和一群好人在一个阳光灿烂的日子里干一件事', 'test-21@codding.cn', 1, 9, 0, 0, 'http://codding.cn', '10.4.10.41', '奇凤科技', 'http://codding.cn', 1542966085),
(22, '脐橙', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '脐橙 和一群好人在一个阳光灿烂的日子里干一件事', 'test-22@codding.cn', 1, 0, 0, 0, 'http://codding.cn', '10.4.10.41', '发频科技', 'http://codding.cn', 1542966086),
(23, '樱桃', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '樱桃 和一群好人在一个阳光灿烂的日子里干一件事', 'test-23@codding.cn', 1, 1, 0, 0, 'http://codding.cn', '10.4.10.41', '艾航科技', 'http://codding.cn', 1542966087),
(24, '山竹', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山竹 和一群好人在一个阳光灿烂的日子里干一件事', 'test-24@codding.cn', 1, 2, 0, 0, 'http://codding.cn', '10.4.10.41', '卓名科技', 'http://codding.cn', 1542966088),
(25, '榴莲', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '榴莲 和一群好人在一个阳光灿烂的日子里干一件事', 'test-25@codding.cn', 1, 3, 0, 0, 'http://codding.cn', '10.4.10.41', '荣清科技', 'http://codding.cn', 1542966089),
(26, '芒果', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-26@codding.cn', 1, 4, 0, 0, 'http://codding.cn', '10.4.10.41', '升帝科技', 'http://codding.cn', 1542966090),
(27, '草莓', 0, '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '草莓 和一群好人在一个阳光灿烂的日子里干一件事', 'test-27@codding.cn', 1, 5, 0, 0, 'http://codding.cn', '10.4.10.41', '用好科技', 'http://codding.cn', 1542966091);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
