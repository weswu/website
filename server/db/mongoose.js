/*
  链接数据库
  node mongoose.js
*/

let mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:20201113@wes.z45uy.mongodb.net/website?retryWrites=true&w=majority')

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
  console.log('连接成功！')
})

/*
  用 mongoose.Schema 插入数据
 */
let Schema = mongoose.Schema

let userSchema = Schema({
  name: { type: String, required: true, unique: true },
  email: String,
  password: { type: String, required: true }
})
let User = mongoose.model('User', userSchema)

module.exports = {
  mongoose,
  User
}
