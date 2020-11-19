var express = require('express')
var router = express.Router()
var db = require('../db/mongodb')

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page;
  db.find('movies', {}, {"pageamount":10,"page":page,"sort":{"date":-1}}, function (err, result) {
    db.success(res, result, err)
  })
})


module.exports = router
