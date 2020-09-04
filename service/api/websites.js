var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('../db/db')
var sqlmap = require('../db/sqlMap')

// 链接数据库
var conn = mysql.createConnection(db.mysql)
conn.connect()

const success = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

router.get('/list', (req, res) => {
  var sql = sqlmap.websites.list
  conn.query(sql, (err, result) => {
    if (err) console.log(err)
    if (result) {
      success(res, result)
    }
  })
})

module.exports = router
