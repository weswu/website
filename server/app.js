require('./db/mongoose')

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser')
let logger = require('morgan');
let session = require('express-session');
// 路由404异常
let createError = require('http-errors');
// await异常捕获处理
//require('express-async-errors');
let app = express();

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
app.use('/', require('./routes/router'))
//文章
app.use('/api/news', require('./routes/news'))
//视频
//app.use('/api/movies', require('./routes/movies'))
//用户
app.use('/api/user', require('./routes/user'))
//分类
//app.use('/api/category', require('./routes/category'))
//评论
//app.use('/api/comment', require('./routes/comment'))


// 注册异常处理中间件
// 1. catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// 2. error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  // res.fail(err.toString())
});

module.exports = app;
