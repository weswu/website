/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Host           : localhost
 Source Database       : website
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(15) NOT NULL COMMENT '密码',
  `nickname` varchar(20) NOT NULL DEFAULT 'nickname' COMMENT '昵称',
  `telephone` bigint(20) NOT NULL COMMENT '手机号',
  `email` varchar(30) NOT NULL COMMENT '邮箱',
  `photo` varchar(255) COMMENT '头像',
  `create_time` datetime NOT NULL COMMENT '注册时间',
  `birthday` date COMMENT '用户生日',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES
(1, 'admin', '123456', 'admin', 15168352892, '836790625@qq.com', '', '2020-01-01 00:00:00', '1991-07-28'),
(2, 'wes', '123456', 'wes', 15168352892, '836790625@qq.com', '', '2020-01-01 00:00:00', '1991-07-28');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
