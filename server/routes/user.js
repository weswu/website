let router = require('express').Router()
const User = require('../model/user')
//const crypto = require('lxj-crypto')

/**
 * 查询列表页
 */
router.get('/list', async (req, res) => {
  let page = req.query.page || 1
  let size = parseInt(req.query.size) || 10
  let skipnumber = size * (page - 1) || 0
  let data = await User.find().skip(skipnumber).limit(size).sort({name: -1})
  let total = await User.count()
  res.json({
    code: 0,
    data: {
      list: data,
      total: total,
      pages: total % size == 0 ? total / size : Math.ceil(total / size)
    },
    msg: null
  })
})

/**
 * 添加
 */
router.post('/add', async (req, res) => {
  let user = req.body

  //检查密码是否为空
  if(!user.password || user.password.length === 0) {
    throw Error('密码不能为空')
  }
  //检查用户是否已经存在
  let result = await User.findOne({email: user.email}).select('-__v')
  if(result) {
    throw Error('用户名已经存在')
  }
  //对密码进行加密,加密的方式：使用username作为随机数对password进行哈希
  //user.password = crypto.md5Hmac(user.password, user.name)
  await User.create(user)
  res.json({
    code: 0,
    data: true,
    msg: null
  })
})

/**
 * 删除
*/
router.delete('/:id', async (req, res) => {
  var id = req.params.id
	let data = await User.deleteOne({_id: id})
  if(!data || data.n === 0){
    throw Error('删除用户失败')
  }
  res.json({
    code: 0,
    data: data,
    msg: null
  })
})

/**
 * 查询
*/
router.get('/:id', async (req, res) => {
  var id = req.params.id
  let data = await User.findOne({_id: id})
  res.json({
    code: 0,
    data: data,
    msg: null
  })
})

module.exports = router
