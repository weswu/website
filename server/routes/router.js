let express = require('express')
let router = express.Router()
let md5 = require('../db/md5')
let Model = require('../model/user')

// 首页
router.get('/', (req, res, next) => {
  let info = '未登录！'
  if(req.session.login === '1'){
    info = '已登录！'
  }
  res.render('index', { title: 'Express', userInfo: info })
})


/*****************************   登录    ************************/

/**
  * 登录的方法
  * @param user
  * @returns token
*/
router.post('/api/login', async (req, res) => {
  let email = req.body.email
  let password = req.body.password
  //检索数据库，按邮箱检索数据库，查看密码是否匹配
  let data = await Model.findOne({email: email}, (err, ret) => {
    if(err) throw Error('服务器错误')
  })
  console.log(data)
  let msg
  if(!data){
    throw Error('没有这个人')
  }
  // 对密码进行解密
  var dbpassword = md5.decrypt(data.password)
  //要对用户这次输入的密码，进行相同的加密操作。然后与
  //数据库中的密码进行比对
  if (password === dbpassword) {
    msg = '登陆成功'
    req.session.login = '1' // 设置session
  } else {
    msg = '密码不匹配'
  }
  res.json({
    code: 0,
    data: true,
    msg: msg
  })
})

/*****************************   注册    ************************/
//提交注册
// router.post('/register', (req, res, next) => {
//   //得到用户填写的东西
//   let params = req.body
//   var password = params.password
//   var md5PassWord = md5(md5(password).substr(4,7) + md5(password))
//   let data = {
//     username: params.username,
//     password: params.md5PassWord,
//   }
//   //写入数据库
//   db.insertOne('users', data, (err, result) => {
//     res.json({
//       code: 0,
//       data: true,
//       msg: null
//     })
//   })
// })

//获取客户端真实ip;
// function getClientIp(req) {
//   var ipAddress;
//   var forwardedIpsStr = req.headers['X-Forwarded-For'];//判断是否有反向代理头信息
//   if (forwardedIpsStr) {//如果有，则将头信息中第一个地址拿出，该地址就是真实的客户端IP；
//     var forwardedIps = forwardedIpsStr.split(',');
//     ipAddress = forwardedIps[0];
//   }
//   if (!ipAddress) {//如果没有直接获取IP；
//     ipAddress = req.connection.remoteAddress;
//   }
//   return ipAddress;
// }
//var ipAddress = getClientIp(req);

module.exports = router
