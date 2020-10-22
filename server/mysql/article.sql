/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `title` text NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `upvote` bigint(20) DEFAULT 0 COMMENT '点赞数',
  `share` bigint(20) DEFAULT 0 COMMENT '分享数',
  `comments` bigint(20) DEFAULT 0 COMMENT '回复数',
  `create_time` datetime NOT NULL COMMENT '发布日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `article`
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES
(1, 1, '标题', '内容', 1, 1, 1, '2020-01-01 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
