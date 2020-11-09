const jwt = require("jsonwebtoken")  //token 签发与验证
const bcrypt = require("bcryptjs") // 字符串加密
const Commit = require("../models/Commit") // 导入用户模型
const mongoose = require("mongoose") // 操作mongoose 数据库
// 自定义路由插件
exports.plugin = {
  name:'commits',
  register: (server, options, next) => {
      // 提交评论
      server.route([
          // 获取首页banner数据接口
          {
              method: 'POST',
              path: '/postcommits',
              handler: async (request, h) => {
                console.log('调用评论接口')
                
                const decoded = jwt.verify(
                      request.headers.authorization,
                      process.env.SECRET_KEY
                  )
                   // 设置注册时间
                  let today = new Date();
                  let y = today.getFullYear()
                  let m = today.getMonth()+1
                  let day = today.getDate()
                  let mongodata = {
                    film_id:request.payload.film_id,
                    content: request.payload.content,
                    commitdate: `${y}-${m}-${day}`,
                    user_id: decoded.id,
                    user_name: decoded.username
                  }
                  return Commit.create(mongodata)
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
          }
      ])
  }
}