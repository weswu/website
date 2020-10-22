/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `article_category`
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category` (
  `article_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `article_category`
-- ----------------------------
BEGIN;
INSERT INTO `article_category` VALUES
(1, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
