var express = require('express')
var router = express.Router()
var db = require('../db/db')
var map = require('../db/map')

const success = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json({
      code: 0,
      data: ret,
      msg: null
    })
  }
}

/**
 * 查询列表页
 */
router.get('/list', (req, res) => {
  var sql = map.article.list
  db.query(sql, (err, result) => {
    if (err) console.log(err)
    if (result) {
      success(res, result)
    }
  })
})

/**
 * 添加
 */
router.post('/add', (req, res) => {
  var sql = map.user.add
  let params = req.body;
  let data = [params.username, params.password, params.nickname, params.telephone, params.email, params.photo, params.create_time, params.birthday]
  db.query(sql, data, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      success(res, result)
    }
  });
})

/**
 * 查询
 */
router.get('/:id', (req, res) => {
  var sql = map.user.detail
  var id = req.params.id
  db.query(sql, id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      success(res, result)
    }
  });
})

/**
 * 删除
 */
router.delete('/:id', (req, res) => {
  var sql = map.user.delete
  var id = req.params.id
  db.query(sql, id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      success(res, result)
    }
  });
})

/**
 * 修改
 */
router.put('/:id', (req, res) => {
  var sql = map.user.update
  var id = req.params.id
  db.query(sql, id, (err, result) => {
    debugger
    if (err) {
      res.json(err);
    } else {
      success(res, result)
    }
  });
})

module.exports = router
