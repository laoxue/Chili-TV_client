"use strict";

var jwt = require("jsonwebtoken"); //token 签发与验证


var bcrypt = require("bcryptjs"); // 字符串加密


var Commit = require("../models/Commit"); // 导入用户模型


var mongoose = require("mongoose"); // 操作mongoose 数据库
// 自定义路由插件


exports.plugin = {
  name: 'commits',
  register: function register(server, options, next) {
    // 提交评论
    server.route([// 获取首页banner数据接口
    {
      method: 'POST',
      path: '/postcommits',
      handler: function handler(request, h) {
        var decoded, today, y, m, day, mongodata;
        return regeneratorRuntime.async(function handler$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('调用评论接口');
                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY); // 设置注册时间

                today = new Date();
                y = today.getFullYear();
                m = today.getMonth() + 1;
                day = today.getDate();
                mongodata = {
                  film_id: request.payload.film_id,
                  content: request.payload.content,
                  commitdate: "".concat(y, "-").concat(m, "-").concat(day),
                  user_id: decoded.id,
                  user_name: decoded.username
                };
                return _context.abrupt("return", Commit.create(mongodata).then(function (article) {
                  if (article) {
                    return {
                      code: 0,
                      data: article
                    };
                  } else {
                    return {
                      code: -1,
                      msg: "找不到相关文章!"
                    };
                  }
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        });
      }
    }]);
  }
};