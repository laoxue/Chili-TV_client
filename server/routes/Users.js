const jwt = require("jsonwebtoken")  //token 签发与验证
const bcrypt = require("bcryptjs") // 字符串加密
const Joi = require('joi');
const User = require("../models/User") // 导入用户模型
const Article = require("../models/Article") // 导入文章模型
const mongoose = require("mongoose") // 操作mongoose 数据库
const fs = require('fs')
const Path = require('path')
const formidable = require('formidable')
const Upload = require('./../handlers/upload.handler')
process.env.SECRET_KEY = 'secret' // 设置密钥
// 自定义路由插件
exports.plugin = {
    name:'users',
    register: (server, options, next) => {
        server.bind({name:'zhangsan'})
        // 登录接口
        server.route([
            {
                method: 'POST',
                path: '/login',
                handler: (request, h) => {
                    console.log('有人调用登录')
                    return User.findOne({
                        username:request.payload.username
                    })
                    .then(user => {
                        if(user) {
                            // 如果存在user 说明是用户
                            // 对比密码
                            if(bcrypt.compareSync(request.payload.password,user.password)){
                                // 定义预定token内容
                                const payload = {
                                    id: user._id,
                                    username: user.username,
                                }
                                // 签发token
                                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                                    expiresIn: 1440
                                })
                                let {username , sex ,remark, headUrl} = user
                                const backData = {
                                    data: {
                                        username,
                                        sex,
                                        remark,
                                        headUrl,
                                        token
                                    },
                                    code: 0
                                }
                                return backData
                            }else{
                                // 请求密码不同则提示不同
                                return{
                                    code:-1,
                                    msg: '密码输入错误!'
                                }
                            }
                        }else {
                            // 用户不存在 返回不存在信息
                            return {
                                code:-1,
                                msg:'您还未注册，请注册后登录!'
                            }
                        }
                    })
                    .catch(err => {
                        return {
                            error:err
                        }
                    })
                }
            },
            // 注册用户
            {
                method: 'POST',
                path: '/register',
                handler: (request, h) => {
                    // 设置注册时间
                    let today = new Date();
                    let m = today.getMinutes() - today.getTimezoneOffset()
                    today = today.setMinutes(m)
                    // 存入数据库的格式
                    const userData = {
                        username: request.payload.username,
                        password:request.payload.password,
                        sex:request.payload.sex,
                        remark:request.payload.remark,
                        date:today
                    }
                    return User.findOne({
                        username: request.payload.username
                    })
                    .then(user => {
                        // 如果没找到说明新用户
                        if(!user) {
                            // 对密码明文加密
                            bcrypt.hash(request.payload.password,10 ,(err, hash) => {
                            userData.password = hash
                            // 将注册用户信息写入数据库
                            return User.create(userData)
                                .then(user => {
                                    return {
                                        code:0
                                    }
                                })
                                .catch(err => {
                                    return h.response(error).code(500);
                                })
                            })
                            return {
                                code:0,
                                msg:'注册成功'
                            }
                        }else {
                            return {
                                code:-1,
                                msg:'已存在相同账号'
                            }
                        }
                    })
                }
            },
            // 获取用户信息
            {
                method: 'GET',
                path: '/userinfo',
                handler: async (request, h) => {
                    try {
                         const decoded = jwt.verify(
                         request.headers.authorization,
                         process.env.SECRET_KEY
                        )
                        return User.find({
                            _id: mongoose.Types.ObjectId(decoded.id),
                        }, {password:0,_id:0})
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
                    } catch(err) {
                        return h.response({err}).code(401)
                    }
                }
            },
            // 更新用户信息
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
                config: {
                    payload: {
                      maxBytes: 1000 * 1000 * 10, // 10 Mb
                    }
                },
                handler: async (request, h) => {
                    console.log('有人调用上传头像')
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
            // 获取banner图
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
            // 获取文章信息
            {
                method: 'GET',
                path: '/getarticles',
                handler: async (request, h) => {
                  console.log('调用获取getarticles')
                  console.log()
                    // const decoded = jwt.verify(
                    //     request.headers.authorization,
                    //     process.env.SECRET_KEY
                    // )
                    db.articles.aggregate([
                        {
                            $lookup:{
                                fom: "user",
                                localField:"user_id",
                                foreignField:"_id",
                                as:"inventory_doces"
                            }
                        }
                    ])
                    return inventory_doces.find({
                        _id: mongoose.Types.ObjectId(request.query.id),
                    })
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
            // 静态资源
            {
                method: 'GET',
                path: '/{params*}',
                handler: async (request, h) => {
                    return h.file(`./public/${request.params.params}`);
                }
            }
        ])
    }
}