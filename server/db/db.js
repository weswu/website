var mysql = require('mysql')

// 链接数据库
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'website',
  dateStrings : true //解决时间格式
})
conn.connect()

module.exports = conn
