var express = require('express')
var router = express.Router()
var db = require('../db/db')
var ObjectID = require('mongodb').ObjectID

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page
  var size = req.query.size
  db.find('comments', {}, {size: size, page: page, 'sort': {'date': -1}}, function (err, result) {
    db.success(res, result, err)
  })
})

/**
 * 查询
*/
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('comments', {'_id': ObjectID(id)},function (err,result) {
    res.json({
      code: 0,
      data: result[0],
      msg: null
    })
  })
})

/**
 * 添加
 */
router.post('/add', (req, res) => {
  let params = req.body
  let data = {
    name: params.name,
    email: params.email,
    content: params.content,
  }
  //写入数据库
  db.insertOne('comments', data, (err, result) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})

/**
 * 删除
*/
router.delete('/:id', (req, res) => {
  var id = req.params.id
  db.deleteMany('comments', {'_id': ObjectID(id)}, (err, results) => {
    if(err) return console.log("删除访问用户数据错误:"+err)
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})


module.exports = router
