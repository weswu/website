var express = require('express')
var router = express.Router()
var db = require("../db/mongodb.js")
var ObjectID = require('mongodb').ObjectID

/**
 * 查询列表页
 */
router.get('/movies', (req, res) => {
  var page = req.query.page;
  var params = {}
  // 多条件查询
  if(req.query.type === 'javascript'){
    params = {"classify":"JavaScript"}
  }
  if(req.query.type === 'nodejs'){
    params = {"classify":"NodeJS"}
  }
  if(req.query.type === 'environment'){
    params = {"classify":"Environment"}
  }
  db.find('articles', params, {'pageamount': 10, 'page':page, 'sort': {'date': -1}}, function (err, result) {
    db.success(res, result, err)
  })
})

/**
 * 查询
*/
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('articles', {'_id': ObjectID(id)},function (err,result) {
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
    title: params.title,
    content: params.content,
    classify: params.classify,
    upvote: params.upvote, //点赞数
    comments: params.comments, //回复数
  }
  //写入数据库
  db.insertOne('articles', data, (err, result) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})

/**
 * 修改
*/
router.put('/:id', (req, res) => {
  var id = req.params.id
  let params = req.body
  let data = {
    title: params.title,
    content: params.content,
    classify: params.classify,
    upvote: params.upvote, //点赞数
    comments: params.comments, //回复数
  }
  //写入数据库
  db.update('articles', {'_id': ObjectID(id)}, {$set: data}, (err, result) => {
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
  db.deleteMany('articles', {'_id': ObjectID(id)}, (err, results) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})

/**
 * 点赞数
*/
router.put('/upvote/:id', (req, res) => {
  db.find('articles', {'_id': ObjectID(id)},function (err,result) {
    var visitNum = result[0].visitNum
    db.updateMany("article", {'_id': ObjectID(id)}, {$set:{"visitNum":visitNum+1}}, (err, results) => {
      res.json({
        code: 0,
        data: true,
        msg: null
      })
    })
  })
})


module.exports = router
