var express = require('express')
var router = express.Router()
var db = require("../db/mongodb.js")
//与数据库默认的_id进行匹配
var ObjectID = require('mongodb').ObjectID
var formidable = require('formidable')

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var params = {
    pageamount: parseInt(req.query.size) || 10,
    page: parseInt(req.query.page),
    sort: {
      date: -1
    }
  }
  db.find('movies', {}, params, function (err, result) {
    db.getAllCount('movies', (total) => {
      db.list(res, result, {
        total: total,
        pages: total % params.pageamount == 0 ? total / params.pageamount : Math.ceil(total / params.pageamount)
      }, err)
    })
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
    db.success(res, result, err)
  });
})

/**
 * 查询
 */
router.get('/:id', (req, res) => {
  var id = req.params.id
  db.find('movies', {'_id': ObjectID(id)}, (err, result) => {
    db.success(res, result[0], err)
  })
})

/**
 * 删除
 */
router.delete('/:id', (req, res) => {
  var id = req.params.id
  db.deleteMany('movies', {'_id': ObjectID(id)}, (err, results) => {
    res.send('1')
  });
})

/**
 * 修改
 */
router.put('/detail', (req, res) => {
  if(req.session.login != "1") {
    return res.send("请登陆！")
  }
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields) {
    db.getAllCount("movies", function (count) {
      var allCount = count.toString();
      var date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      //写入数据库
      db.insertOne("article", {
        "ID" : parseInt(allCount) + 1,
        "topic" : fields.topic,
        "publisher" : fields.publisher,
        "classify" : fields.classify,
        "content" : fields.content,
        "date" : date,
        "thumbsUp": 0,
        "visitNum" : 0
      },function (err, result) {
        if(err){
          res.send("-1");
          return;
        }
        res.send("1");
      });
    });
  })
})

module.exports = router
