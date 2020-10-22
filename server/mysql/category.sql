/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '名称',
  `parent_id` bigint(20) COMMENT '父ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `category`
-- ----------------------------
BEGIN;
INSERT INTO `category` VALUES
(1, '日常', null),
(2, '技术', null),
(3, '日记', null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
