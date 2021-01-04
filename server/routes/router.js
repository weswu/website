var express = require('express')
var router = express.Router()
var db = require('../db/db')
var md5 = require("../db/md5.js")

//首页
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// if(req.session.login !== '1'){
//   res.send("请登陆！")
// }

/*****************************   注册    ************************/
//提交登陆
router.post('/login', (req, res) => {
  let params = req.body
  var username = params.username;
  var password = params.password;
  password = md5(md5(password).substr(4,7) + md5(password));

  //检索数据库，按登录名检索数据库，查看密码是否匹配
  db.find("user",{"username":username},function(err,result){
      if(err){
          res.send("-3");//服务器错误
          return
      }
      if(result.length == 0){
          res.send("-1");  //-2没有这个人
          return;
      }
      var dbpassword = result[0].password;
      //要对用户这次输入的密码，进行相同的加密操作。然后与
      //数据库中的密码进行比对
      if(password == dbpassword){
          req.session.login = "1";
          res.send("1");  //登陆成功
          return;
      }else{
          res.send("-2"); //密码不匹配
      }
  })
})

/*****************************   注册    ************************/
//提交注册
router.post('/register', (req, res, next) => {
  //得到用户填写的东西
  let params = req.body
  var password = params.password
  var md5PassWord = md5(md5(password).substr(4,7) + md5(password))
  let data = {
    username: params.username,
    password: params.md5PassWord,
  }
  //写入数据库
  db.insertOne('users', data, (err, result) => {
    res.json({
      code: 0,
      data: true,
      msg: null
    })
  })
})



//获取用户地理位置
router.get('/address', (req, res) => {
  let params = req.body
  var cxipAddress = params.cxipAddress;
  var cxIsp = params.cxIsp;
  var cxBrowser = params.cxBrowser;
  var cxOS = params.cxOS;
  var gdIsp = params.gdIsp;
  var ipAddress = getClientIp(req);

  db.getAllCount("Visitor", function (count) {
      var allCount = count.toString();
      //写入数据库
      db.insertOne("Visitor", {
          "ID" : parseInt(allCount) + 1,
          "ipAddress" : ipAddress,
          "cxipAddress" : cxipAddress ? cxipAddress : "查询网无法查询",
          "cxIsp" : cxIsp ? cxIsp : "查询网无法定位",
          "cxBrowser" : cxBrowser ? cxBrowser :"查询网无法识别游览器",
          "cxOS" : cxOS ? cxOS :"查询网无法识别系统",
          "gdIsp" : gdIsp ? gdIsp : "高德无法定位",
      },function (err, result) {
          if(err){
              console.log("服务器错误" + err);//服务器错误
              return;
          }
          console.log("有人访问Scott主页啦！");
          res.send("1");
      });
  });
})


//获取客户端真实ip;
function getClientIp(req) {
    var ipAddress;
    var forwardedIpsStr = req.headers['X-Forwarded-For'];//判断是否有反向代理头信息
    if (forwardedIpsStr) {//如果有，则将头信息中第一个地址拿出，该地址就是真实的客户端IP；
        var forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {//如果没有直接获取IP；
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
}

module.exports = router
