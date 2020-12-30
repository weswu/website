var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var session = require('express-session');
// 引入异常捕获处理  mongoose
//require('express-async-errors');
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

// log中间件
app.use(logger('dev'));
// 注册body-parser中间件
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 注册api路由
//公用
app.use('/api', require('./routes/router'))
// //文章
app.use('/api/article', require('./routes/article'))
//视频
app.use('/api/movies', require('./routes/movies'))
//用户
app.use('/api/user', require('./routes/user'))
//分类
app.use('/api/category', require('./routes/category'))
//评论
app.use('/api/comment', require('./routes/comment'))


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  console.log('404')
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
