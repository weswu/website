let crypto = require('crypto')
let config = require('./config')

//加密
exports.encrypt = (str) => {
  var cipher = crypto.createCipher('aes192', config.session_secret);
  var enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}
//解密
exports.decrypt= (str) => {
  var decipher = crypto.createDecipher('aes192', config.session_secret);
  var dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}
