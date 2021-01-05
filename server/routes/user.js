var express = require('express')
var router = express.Router()
var db = require('../db/db')
var ObjectID = require('mongodb').ObjectID

var {mongoose, User} = require('../db/mongoose')


function getCount(name)  {
  db.getAllCount(name, function (count) {
    return count.toString()
  })
}

/**
 * 查询列表页
 */
 router.get('/detail', (req, res, next) => {
   if(req.session.login !== '1'){
     res.send("请登陆！")
   }
 })

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page
  var size = req.query.size
  let total = getCount('users')
  console.log(total)
  db.find('users', {}, {size: size, page: page, 'sort': {'date': -1}}, function (err, result) {
    db.list(res, result, {
      total: total,
      pages: total % size == 0 ? total / size : Math.ceil(total / size)
    }, err)
  })
})

/**
 * 添加
 */
router.post('/add', (req, res) => {
  let params = req.body
  let newUser = new User(params)
  newUser.save((err, result)=> {
    if (err) return console.error(err)
    res.json({
      code: 0,
      data: result,
      msg: null
    })
  })
  //写入数据库
  // let data = {
  //   title: params.title,
  //   content: params.content,
  //   classify: params.classify,
  //   upvote: params.upvote, //点赞数
  //   comments: params.comments, //回复数
  // }
  // db.insertOne('articles', data, (err, result) => {
  //   res.json({
  //     code: 0,
  //     data: true,
  //     msg: null
  //   })
  // })
})

/**
 * 删除
*/
router.delete('/:id', (req, res) => {
  var id = req.params.id
  db.deleteMany('users', {'_id': ObjectID(id)}, (err, results) => {
    if(err) return console.log("删除访问用户数据错误:"+err)
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})

/**
 * 查询
*/
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('users', {'_id': ObjectID(id)},function (err,result) {
    res.json({
      code: 0,
      data: result[0],
      msg: null
    })
  })
})

module.exports = router
