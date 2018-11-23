-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 �?11 �?18 �?17:45
-- 服务器版本: 5.5.53
-- PHP 版本: 5.6.27

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
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author` int(10) unsigned NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `tags` text NOT NULL,
  `belong` int(10) unsigned NOT NULL,
  `forbid` tinyint(1) NOT NULL,
  `read` text NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `author`, `title`, `description`, `content`, `tags`, `belong`, `forbid`, `read`, `time`) VALUES
(1, 1, '库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌', '*库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌*\n\n2018年第三季度全球智能手机总共出货3.8亿部，其中排名前十的公司瓜分79%的市场份额；排在第一位的依然是三星，总出货量达7230万部；第二名', '', '库克 苹果 股价', 0, 0, '', 0),
(2, 1, '库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌123', '*库克宣布下一步重点，全球苹果迷都傻眼了，股价暴跌*\n\n2018年第三季度全球智能手机总共出货3.8亿部，其中排名前十的公司瓜分79%的市场份额；排在第一位的依然是三星，总出货量达7230万部；第二名', '', '库克 苹果 股价', 0, 0, '', 0),
(3, 1, '游戏主播收入一般有多少？', 'cover\n周瑾河： 一般来说游戏主播里，女主播比男主播挣的多得多，我直播三个月，礼物收了万把块钱吧。 其实真的挺累的，每天要坐在电脑面前快十个小时，吃鸡这个游戏玩儿的想吐了。观众来了', '', '游戏 主播 收入', 0, 0, '', 0),
(4, 1, '杭州女孩裸辞理由刷爆朋友圈：对不起，90后不是傻B', '最近杭州的一个姑娘因为辞职在互联网上引起了轩然大波。姑娘晒出自己的辞职信，表示自己已在这家公司上班6年，月薪3500左右。并列出了7条离职原因：1:没时间泡崽。2:没时间旅行，去个韩国，定好机票了，单', '', '杭州女孩 理想 朋友圈', 0, 0, '', 0),
(5, 2, '2018年8月1日，碧桂园又又又又出事了，这次是真的“火”了', '风口浪尖上的碧桂园，昨天又出事了。8月1日下午14:30分左右，江苏启东碧桂园中邦上海城二期工地内，浓烟滚滚，一正在施工的建筑楼顶发生火灾，十分钟后消防人员进入现场，火势得到有效的控制。7月26日，安', '', '碧桂园 火了', 0, 0, '', 0),
(6, 2, '如何评价苹果 iPhone XR？', '风口浪尖上的碧桂园，昨天又出事了。8月1日下午14:30分左右，江苏启东碧桂园中邦上海城二期工地内，浓烟滚滚，一正在施工的建筑楼顶发生火灾，十分钟后消防人员进入现场，火势得到有效的控制。7月26日，安', '', 'iphoneXR', 0, 0, '', 0),
(7, 3, '减肥成功的女生有多可怕？', '找到了去年十月一的照片，大概那个时候已经160斤了吧下面这张是前天拍的同一件衣服——————————————————————————现在是119斤，不减了，这样就挺好的。有很多人问我方法，很简单，戒糖', '', '减肥', 0, 0, '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `belong` varchar(50) NOT NULL,
  `belongId` int(10) unsigned NOT NULL,
  `forbid` tinyint(1) NOT NULL,
  `like` text NOT NULL,
  `dislike` text NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` char(64) NOT NULL,
  `description` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT '1',
  `errCount` int(11) NOT NULL,
  `errTime` int(11) NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `description`, `email`, `level`, `errCount`, `errTime`, `time`) VALUES
(1, '摘星fy', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '摘星fy 和一群好人在一个阳光灿烂的日子里干一件事', 'test-1@codding.cn', 9, 0, 0, 1542557377),
(2, '草莓', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '草莓 和一群好人在一个阳光灿烂的日子里干一件事', 'test-2@codding.cn', 0, 0, 0, 1542557378),
(3, '菠萝', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '菠萝 和一群好人在一个阳光灿烂的日子里干一件事', 'test-3@codding.cn', 1, 0, 0, 1542557379),
(4, '芒果', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-4@codding.cn', 2, 0, 0, 1542557380),
(5, '杏er', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '杏er 和一群好人在一个阳光灿烂的日子里干一件事', 'test-5@codding.cn', 3, 0, 0, 1542557381),
(6, '李子', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '李子 和一群好人在一个阳光灿烂的日子里干一件事', 'test-6@codding.cn', 4, 0, 0, 1542557382),
(7, '木瓜', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '木瓜 和一群好人在一个阳光灿烂的日子里干一件事', 'test-7@codding.cn', 5, 0, 0, 1542557383),
(8, '哈密瓜', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '哈密瓜 和一群好人在一个阳光灿烂的日子里干一件事', 'test-8@codding.cn', 6, 0, 0, 1542557384),
(9, '山竹', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山竹 和一群好人在一个阳光灿烂的日子里干一件事', 'test-9@codding.cn', 7, 0, 0, 1542557385),
(10, '樱桃', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '樱桃 和一群好人在一个阳光灿烂的日子里干一件事', 'test-10@codding.cn', 8, 0, 0, 1542557386),
(11, '香蕉', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香蕉 和一群好人在一个阳光灿烂的日子里干一件事', 'test-11@codding.cn', 9, 0, 0, 1542557387),
(12, '芒果', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-12@codding.cn', 0, 0, 0, 1542557388),
(13, '火龙果', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '火龙果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-13@codding.cn', 1, 0, 0, 1542557389),
(14, '香梨', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香梨 和一群好人在一个阳光灿烂的日子里干一件事', 'test-14@codding.cn', 2, 0, 0, 1542557390),
(15, '山楂', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山楂 和一群好人在一个阳光灿烂的日子里干一件事', 'test-15@codding.cn', 3, 0, 0, 1542557391),
(16, '橘子', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '橘子 和一群好人在一个阳光灿烂的日子里干一件事', 'test-16@codding.cn', 4, 0, 0, 1542557392),
(17, '桂圆', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '桂圆 和一群好人在一个阳光灿烂的日子里干一件事', 'test-17@codding.cn', 5, 0, 0, 1542557393),
(18, '葡萄', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '葡萄 和一群好人在一个阳光灿烂的日子里干一件事', 'test-18@codding.cn', 6, 0, 0, 1542557394),
(19, '荔枝', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '荔枝 和一群好人在一个阳光灿烂的日子里干一件事', 'test-19@codding.cn', 7, 0, 0, 1542557395),
(20, '苹果', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '苹果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-20@codding.cn', 8, 0, 0, 1542557396),
(21, '香梨', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '香梨 和一群好人在一个阳光灿烂的日子里干一件事', 'test-21@codding.cn', 9, 0, 0, 1542557397),
(22, '脐橙', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '脐橙 和一群好人在一个阳光灿烂的日子里干一件事', 'test-22@codding.cn', 0, 0, 0, 1542557398),
(23, '樱桃', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '樱桃 和一群好人在一个阳光灿烂的日子里干一件事', 'test-23@codding.cn', 1, 0, 0, 1542557399),
(24, '山竹', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '山竹 和一群好人在一个阳光灿烂的日子里干一件事', 'test-24@codding.cn', 2, 0, 0, 1542557400),
(25, '榴莲', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '榴莲 和一群好人在一个阳光灿烂的日子里干一件事', 'test-25@codding.cn', 3, 0, 0, 1542557401),
(26, '芒果', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '芒果 和一群好人在一个阳光灿烂的日子里干一件事', 'test-26@codding.cn', 4, 0, 0, 1542557402),
(27, '草莓', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', '草莓 和一群好人在一个阳光灿烂的日子里干一件事', 'test-27@codding.cn', 5, 0, 0, 1542557403);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
