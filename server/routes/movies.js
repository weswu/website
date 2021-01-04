var express = require('express')
var router = express.Router()
var db = require('../db/db')
//与数据库默认的_id进行匹配
var ObjectID = require('mongodb').ObjectID

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page
  var size = req.query.size
  var params = {
    size: size,
    page: page,
    sort: {
      date: -1
    }
  }
  db.find('movies', {}, params, function (err, result) {
    db.getAllCount('movies', (total) => {
      db.list(res, result, {
        total: total,
        pages: total % params.size == 0 ? total / params.size : Math.ceil(total / params.size)
      }, err)
    })
  })
})

/**
 * 查询
*/
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('movies', {'_id': ObjectID(id)}, (err, result) => {
    res.json({
      code: 0,
      data: result[0],
      msg: null
    })
  })
})

/**
 * 删除
*/
router.delete('/:id', (req, res) => {
  var id = req.params.id
  db.deleteMany('movies', {'_id': ObjectID(id)}, (err, results) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})


module.exports = router
