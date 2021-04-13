var router = require('express').Router()
const News = require('../model/news')

/**
 * 查询列表页
 */
router.get('/list', async (req, res) => {
  let page = req.query.page || 1
  let size = parseInt(req.query.size) || 10
  let skipnumber = size * (page - 1) || 0
  let data = await News.find().skip(skipnumber).limit(size).sort({name: -1})
  let total = await News.count()
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
 * 查询
*/
router.get('/:id', async (req, res) => {
  var id = req.params.id
  let data = await News.findOne({_id: id})
  res.json({
    code: 0,
    data: data,
    msg: null
  })
})

/**
 * 添加
 */
router.post('/add', async (req, res) => {
  await News.create(req.body)
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
	let data = await News.deleteOne({_id: id}, (err, ret) => {
    let msg = '删除成功'
   	if(err) {
   		msg = '删除失败'
   	}
    res.json({
      code: 0,
      data: true,
      msg: msg
    })
  })
})

/**
 * 修改
*/
router.put('/:id', async (req, res) => {
  var id = req.params.id
  News.findByIdAndUpdate(id, req.body, (err, ret) => {
    let msg = '更新成功'
   	if(err) {
   		msg = '更新失败'
   	}
    res.json({
      code: 0,
      data: true,
      msg: msg
    })
  })
})

/**
 * 点赞数
 * 自动加1
*/


module.exports = router
