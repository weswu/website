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
  var sql = map.tag.list
  db.query(sql, (err, result) => {
    if (err) console.log(err)
    if (result) {
      success(res, result)
    }
  })
})

module.exports = router
