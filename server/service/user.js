const User = require('../model/user')

/**
  * 根据用户名获取某个用户
  * @param username
  * @returns {Promise<*>}
*/



/**
  * 根据用户列表
  * @param username
  * @returns {Promise<*>}
*/

async function getList(params) {
  return await User.find()
}

module.exports = {
  getList
}
