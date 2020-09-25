/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` char(60) NOT NULL,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES
('1', 'admin', '123456', 'admin'),
('2', 'wes', '123456', '小伟'),
('3', 'weibo', '123456', 'weibo'),
('4', 'facebook', '123456', 'facebook');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
