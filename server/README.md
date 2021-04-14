# wes-数据库

## 其他
socket.io
user.broadcast
[案例][0]
[电商后台小项目][1]
[博客网站][2]
http://localhost:3306/api/user/list

### 准备
```
cnpm install express-generator -g
express server
cd server
cnpm install
cnpm start
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


### mongodb
```
mongo "mongodb+srv://wes.z45uy.mongodb.net/<dbname>" --username root
```


### 接口
- http://localhost:3000/api/user/list


#### 添加admin
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {role: "readWrite", db: "admin"},
      {
        role: "userAdminAnyDatabase",
        db: "admin"
      }
    ]
  }
)



### 知识点

#### 中间件

##### express-session
- 工作流
web访问 --> server(保存用户信息 生成session对象[key,value]) --> 返回key --> web保存cookie(key)
web访问(key) --> server查找对应session(value) --> 判断是否登录
- 使用
设置值
req.session.login = "1"
获取值
req.session.login
- 常用方法
```
   req.session.destroy(function(err){}) /*销毁 session*/

   req.session.username='张三'; //设置 session

   req.session.username //获取 session

   req.session.cookie.maxAge=0; //重新设置 cookie 的过期时间
```


#### 数据模型
```
cnpm install mongoose --save-dev
touch mongose.js
```


#### 异常



#### 语句
db.collection.getIndexs()

[0]: https://github.com/scottjeremy/EJblog
[1]: https://blog.csdn.net/www294993741/article/details/84585550
[2]: https://github.com/Nealyang/React-Express-Blog-Demo
