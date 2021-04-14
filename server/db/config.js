/**
 * config
 */

var path = require('path');

var config = {
  session_secret: 'node_wes_secret', // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
};

module.exports = config;
