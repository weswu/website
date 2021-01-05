/*
  链接数据库
  node mongoose.js
*/

let mongoose = require('mongoose')
const url = 'mongodb+srv://root:20201113@wes.z45uy.mongodb.net/website?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=> {
  console.log('mongoose 连接成功！')
})

/*
  用 mongoose.Schema 插入数据
 */
let Schema = mongoose.Schema

let userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})
let User = mongoose.model('User', userSchema)

module.exports = {
  mongoose,
  User
}
