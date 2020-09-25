var express = require('express')
var bodyParser = require('body-parser')
app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

// 注册api路由
//app.use('/api/user', require('./api/user'))
app.use('/api/websites', require('./api/websites'))

app.listen(3000)
console.log('server: http://localhost:3000')
