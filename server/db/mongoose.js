/*
  链接数据库
  node mongoose.js
*/

let mongoose = require('mongoose')
const url = 'mongodb+srv://root:20201113@wes.z45uy.mongodb.net/website?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
  console.log('mongoose 连接成功！')
})
