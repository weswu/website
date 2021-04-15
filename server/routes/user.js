let router = require('express').Router()
let Model = require('../model/user')
let md5 = require('../db/md5')

/**
 * 查询列表页
 */
router.get('/list', async (req, res) => {
  let page = parseInt(req.query.page) || 1
  let size = parseInt(req.query.size) || 10
  let data = await Model.find().skip((page - 1)*size).limit(size).sort({name: -1})
  let total = await Model.count()
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
 * 添加 / 注册
 */
router.post('/add', async (req, res) => {
  let user = req.body

  // 检查密码是否为空
  if(!user.password || user.password.length === 0) {
    throw Error('密码不能为空')
  }
  // 检查用户是否已经存在
  let result = await Model.findOne({email: user.email})
  if(result) {
    throw Error('用户已经存在')
  }
  // 对密码进行加密
  user.password = md5.encrypt(user.password)
  await Model.create(user)
  res.json({
    code: 0,
    data: true,
    msg: '添加成功'
  })
})

/**
 * 删除
*/
router.delete('/:id', async (req, res) => {
  var id = req.params.id
	let data = await Model.deleteOne({_id: id}, (err, ret) => {
   	if(err) throw Error('删除失败')
    res.json({
      code: 0,
      data: true,
      msg: '删除成功'
    })
  })
})

/**
 * 修改
*/
router.put('/:id', async (req, res) => {
  var id = req.params.id
  Model.findByIdAndUpdate(id, req.body, (err, ret) => {
    if(err) throw Error('更新失败')
    res.json({
      code: 0,
      data: true,
      msg: '更新成功'
    })
  })
})

/**
 * 查询
*/
router.get('/detail', async (req, res) => {
  let key = req.session.code
  let token = req.query.token
  if (key === token) {
    let data = await Model.findOne({_id: token})
    res.json({
      code: 0,
      data: data,
      msg: null
    })
  } else {
    res.json({
      code: -1,
      data: false,
      msg: '用户未登录或登录过期了'
    })
  }
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  let data = await Model.findOne({_id: id})
  res.json({
    code: 0,
    data: data,
    msg: null
  })
})


module.exports = router
