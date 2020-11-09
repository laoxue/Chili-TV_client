const jwt = require("jsonwebtoken")  //token 签发与验证
const bcrypt = require("bcryptjs") // 字符串加密
const Article = require("../models/Article") // 导入用户模型
const mongoose = require("mongoose") // 操作mongoose 数据库
// 自定义路由插件
exports.plugin = {
  name:'articles',
  register: (server, options, next) => {
      // 文章接口
      server.route([
          // 获取首页banner数据接口
          {
              method: 'GET',
              path: '/getindexbanner',
              handler: async (request, h) => {
                console.log('调用获取banner')
                const decoded = jwt.verify(
                      request.headers.authorization,
                      process.env.SECRET_KEY
                  )
                  return Article.find({})
                  .then(article => {
                      if (article) {
                          return {
                              code:0,
                              data:article
                          }
                      } else {
                          return {
                              code:-1,
                              msg:"找不到相关文章!"
                          }
                      }
                  })
              }
          },
          // 获取单个文章内容接口
          {
              method: 'POST',
              path: '/updateinfo',
              handler: async (request, h) => {
                  const decoded = jwt.verify(
                      request.headers.authorization,
                      process.env.SECRET_KEY
                  )
                  // 往schema中添加属性
                  const updateUser = {
                      username:request.payload.username,
                      sex:request.payload.sex,
                      remark: request.payload.remark,
                  }
                  return User.findByIdAndUpdate({
                      _id: mongoose.Types.ObjectId(decoded.id),
                  }, updateUser)
                  .then(user => {
                      if (user) {
                          return {
                              code:0,
                              data:user
                          }
                      } else {
                          return {
                              code:-1,
                              msg:"找不到用户!"
                          }
                      }
                  })
              }
          },
          // 上传头像
          {
              method: 'POST',
              path: '/uploadheader',
              handler: async (request, h) => {
                  const decoded = jwt.verify(
                      request.headers.authorization,
                      process.env.SECRET_KEY
                  )
                  return Upload(request.payload.pic, mongoose.Types.ObjectId(decoded.id)).then((res) => {
                      // 往schema中修改属性
                      const updateUser = res
                      return User.findByIdAndUpdate({
                          _id: mongoose.Types.ObjectId(decoded.id),
                      }, updateUser)
                      .then(user => {
                          if (user) {
                              return {
                                  code:0,
                                  data:updateUser
                              }
                          } else {
                              return {
                                  code:-1,
                                  msg:"找不到用户!"
                              }
                          }
                      })
                  })
              }
          },
          // 静态资源
          {
              method: 'GET',
              path: '/{params*}',
              handler: async (request, h) => {
                  console.log(request.params.params)
                  return h.file(`./public/${request.params.params}`);
              }
          }
      ])
  }
}