var express = require('express')
var router = express.Router()
var db = require('../db/mongodb')
var ObjectID = require('mongodb').ObjectID

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page
  var size = req.query.size
  db.find('categorys', {}, {size: size, page: page, 'sort': {'date': -1}}, function (err, result) {
    db.success(res, result, err)
  })
})

/**
 * 查询
*/
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('categorys', {'_id': ObjectID(id)}, (err, result) => {
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
  db.deleteMany('categorys', {'_id': ObjectID(id)}, (err, results) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})


module.exports = router
