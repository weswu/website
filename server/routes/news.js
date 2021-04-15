let router = require('express').Router()
let Model = require('../model/news')

/**
 * 查询列表页
 */
router.get('/list', async (req, res) => {
  let page = parseInt(req.query.page) || 1
  let size = parseInt(req.query.size) || 10
  let data = await Model.find().skip((page - 1)*size).limit(size)
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
 * 添加
 */
router.post('/add', async (req, res) => {
  if(req.session.code){
    throw Error('未登录 news add')
  }
  await Model.create(req.body)
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
  if(req.session.code){
    throw Error('未登录 news delete')
  }
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
  if(req.session.code){
    throw Error('未登录 news edit')
  }
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
router.get('/:id', async (req, res) => {
  var id = req.params.id
  let data = await Model.findOne({_id: id})
  res.json({
    code: 0,
    data: data,
    msg: null
  })
})

/**
 * 点赞数
 * 自动加1
*/


module.exports = router
