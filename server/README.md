# wes-数据库

## 其他
socket.io
user.broadcast
[案例][0]


### 准备
```
cnpm install express-generator -g
express server
cd server
cnpm install
```

### 调试
```
node --inspect bin/www
```
chrome://inspect/#devices
devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws://127.0.0.1:9229/0483a97a-7edc-48f2-bcc3-056924dd07b0


### 开始

```
yarn server
```


### mysql(未使用)
public/mysql
```
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
```

### mongodb
```
mongo "mongodb+srv://wes.z45uy.mongodb.net/<dbname>" --username root
```


### 知识点

#### 中间件

#### 数据模型
```
cnpm install mongoose --save-dev
touch mongose.js
```


#### 异常



#### 语句
db.collection.getIndexs()

[0]: https://github.com/scottjeremy/EJblog
