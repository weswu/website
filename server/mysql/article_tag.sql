/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `article_tag`
-- ----------------------------
DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE `article_tag` (
  `article_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tag_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `article_tag`
-- ----------------------------
BEGIN;
INSERT INTO `article_tag` VALUES
(1, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
