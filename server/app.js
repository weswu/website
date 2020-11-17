var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var session = require('express-session');

var app = express();

// view engine setup 静态jade模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//使用session
app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true
}));

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册api路由
// app.use('/api/', require('./routes/index'))
// app.use('/api/user', require('./routes/user'))
// app.use('/api/news', require('./routes/article'))
// app.use('/api/category', require('./routes/category'))
// app.use('/api/tag', require('./routes/tag'))
// app.use('/api/comment', require('./routes/comment'))


var router = require("./routes/router.js");
//首页
app.get('/', router.index)
//文章
app.use('/article', require('./routes/article'))

//编写页面
app.get("/recording", router.showRecording);
//执行保存
app.post("/doRecording", router.doRecording);

//取得总页数
app.post("/getAllAmount", router.getAllAmount);

//删除文章
app.post("/delArticle", router.delArticle);

//注册页面
app.get("/register", router.showRegister);
app.post("/doRegister",router.doRegister);

//登陆页面
app.get("/login", router.showLogin);
app.post("/doLogin", router.doLogin);

//分类文章
//javascript!
app.get("/JavaScript",router.showJavaScript);
app.post("/getJavaScript", router.getJavaScript);
//javascript

//NodeJS!
app.get("/NodeJS",router.showNodeJS);
app.post("/getNodeJS", router.getNodeJS);
//NodeJS

//Environment!
app.get("/Environment", router.showEnvironment);
app.post("/getEnvironment", router.getEnvironment);
//Environment

//About!
app.get("/About", router.showAbout);
//About

//Comment!
app.get("/Comment", router.showComment);
app.post("/doComment", router.doComment);
app.post("/getComment", router.getComment);
app.post("/getAllCountComment", router.getAllCountComment);
//Comment

//后台页面
app.get("/manage",router.getManage);

//访问用户数据！
app.get("/userdata", router.showUserdata);
app.post("/getUserdata", router.getUserdata);
app.post("/countUserdata", router.countUserdata);
app.post("/delUserdata", router.delUserdata);
//访问用户数据

//后台页面!

//获取用户地理位置
app.post("/getAddress", router.getAddress);

//VisitorNum(游览数)
app.post("/addVisitorNum", router.addVisitorNum);

//addThumbsUp(点赞数)
app.post("/addThumbsUp", router.addThumbsUp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
