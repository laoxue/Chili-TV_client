const jwt = require("jsonwebtoken")  //token 签发与验证
const bcrypt = require("bcryptjs") // 字符串加密
const Film = require("../models/Films") // 导入用户模型
const Commit = require("../models/Commit") // 导入用户模型
const mongoose = require("mongoose") // 操作mongoose 数据库
const searchhandler = require('./../plugins/copydouban')
const xlsx = require("xlsx")
// 自定义路由插件searchfilm
exports.plugin = {
  name:'films',
  register: (server, options, next) => {
      // 影片接口
      server.route([
          // 获取影片接口
          {
              method: 'GET',
              path: '/getfilms/{id?}',
              handler: async (request, h) => {
                console.log('调用film')
                console.log(request.query.id)
                // 如果有id 则请求单条 如果没有则请求全部影片
                
                const decoded = jwt.verify(
                      request.headers.authorization,
                      process.env.SECRET_KEY
                  )
                  return Film.find(request.query.id ? { _id: mongoose.Types.ObjectId(request.query.id),} : {})
                  .then(article => {
                      if (article) {
                        return Commit.find(request.query.id ?{film_id:article[0]._id}:{})
                        .populate('user_id')
                        .then((res) => {
                            return {
                                code:0,
                                data:article,
                                commit:res
                            }
                        })
                          
                      } else {
                          return {
                              code:-1,
                              msg:"找不到相关文章!"
                          }
                      }
                  })
              }
          }
      ]),
      // 获取上传的影片
      server.route([
        // 获取影片接口
        {
            method: 'GET',
            path: '/getmyfilms',
            handler: async (request, h) => {
              console.log('调用我上传的film')
              console.log(request.query.id)
              // 如果有id 则请求单条 如果没有则请求全部影片
              
              const decoded = jwt.verify(
                    request.headers.authorization,
                    process.env.SECRET_KEY
                )
                return Film.find({user_id : mongoose.Types.ObjectId(decoded.id)})
                
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
    ]),
      // 模糊查询
      server.route([
        // 获取影片接口
        {
            method: 'GET',
            path: '/searchfilm',
            handler: async (request, h) => {
              console.log(request.query.filmname)
              const decoded = jwt.verify(
                    request.headers.authorization,
                    process.env.SECRET_KEY
                )
                let reg = new RegExp(request.query.filmname);
                return Film.find(request.query.filmname === '' ? {} : {filmname:{$regex: reg}})
                
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
      ]),
      //   上传excel
      server.route({
        path: "/uploadExcel",
        method: "POST",
        handler (request,h) {
          const decoded = jwt.verify(
            request.headers.authorization,
            process.env.SECRET_KEY
          )
            let workbook = xlsx.read(request.payload.file, {type: 'buffer'})
            let sheetNames = workbook.SheetNames;
            worksheet = workbook.Sheets[sheetNames[0]]
            let xmljson = xlsx.utils.sheet_to_json(worksheet)
            console.log(xmljson)
            let mongojson = []
            mongojson = xmljson.map(iterator => {
              return {
                "filmname": iterator.影片名字,
                "sourcecode": iterator.资源码 ? iterator.资源码 : '',
                "dbscore": iterator.评分,
                "coverurl": iterator.封面地址,
                "typelabel": iterator.类型,
                "user_id": decoded.id,
                "user_name": decoded.username,
                "filmlist_id": iterator.属于系列 ? iterator.属于系列 : ''
              }
            })
            console.log(mongojson)
            return Film.insertMany(mongojson)
            .then(film => {
              if (film) {
                  return {
                      code:0,
                      data:film
                  }
              } else {
                  return {
                      code:-1,
                      msg:"找不到相关文章!"
                  }
              }
          })
        }
      }),
      // 删除指定影片
      server.route([
        // 删除指定影片
        {
            method: 'POST',
            path: '/delfilms',
            handler: async (request, h) => {
              console.log('调用删除')
              console.log(request.payload.ids)
              // 如果有id 则请求单条 如果没有则请求全部影片
              
              const decoded = jwt.verify(
                    request.headers.authorization,
                    process.env.SECRET_KEY
                )
                return Film.deleteMany({_id: {$in: request.payload.ids}})
                
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
    ]),
    // 豆瓣查询影片
    server.route([
        // 豆瓣查询影片
        {
            method: 'GET',
            path: '/searchfilmbydouban',
            handler: async (request, h) => {
                let end = searchhandler(request.query.filmname);
                return end.then((res) =>{
                    // console.log(res)
                    return {
                        code:0,
                        data:res
                    }
                })
            }
        }
    ]),
    server.route([
        // 豆瓣插入影片
        {
            method: 'POST',
            path: '/savefilmbydouban',
            handler: async (request, h) => {
                console.log('进入豆瓣影片')
                const decoded = jwt.verify(
                    request.headers.authorization,
                    process.env.SECRET_KEY
                )
                let mongodata = {
                    "filmname": request.payload.filmname,
                    "sourcecode": request.payload.sourcecode,
                    "dbscore": request.payload.dbscore,
                    "coverurl": request.payload.coverurl,
                    "typelabel": request.payload.typelabel,
                    "user_id": mongoose.Types.ObjectId(decoded.id),
                    "user_name": decoded.username,
                    "desc":request.payload.desc,
                    "_id":new mongoose.Types.ObjectId(),
                    "filmlist_id": ''
                }
                console.log(mongodata)
                return Film.create(mongodata)
                
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