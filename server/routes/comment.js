var express = require('express')
var router = express.Router()
var db = require('../db/mongodb')

/**
 * 查询列表页
 */
router.get('/list', (req, res, next) => {
  var page = req.query.page;
  db.find('comment', {}, {'pageamount': 10, 'page':page, 'sort': {'date': -1}}, function (err, result) {
    db.success(res, result, err)
  })
})

//Comment!

exports.doComment = function (req, res, result) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var name = fields.name;
        var email = fields.email;
        var content = fields.content;
        db.getAllCount("article", function (count) {
            var allCount = count.toString();
            var date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            db.insertOne("comment", {
                "ID" : parseInt(allCount) + 1,
                "name" : name,
                "email" : email,
                "content" : content,
                "date" : date
            },function (err, result) {
                if(err){
                    console.log("留言错误" + err);
                    return;
                }
                res.send("1");
            });
        });
    });
};


//取得评论总页数
exports.getAllCountComment = function (req, res, next) {
    db.getAllCount("comment", function (count) {
        res.send(count.toString());
    });
};
//Comment



// //Comment!
// app.get("/Comment", router.showComment);
// app.post("/doComment", router.doComment);
// app.post("/getComment", router.getComment);
// app.post("/getAllCountComment", router.getAllCountComment);
// //Comment

module.exports = router
