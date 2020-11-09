"use strict";

var jwt = require("jsonwebtoken"); //token 签发与验证


var bcrypt = require("bcryptjs"); // 字符串加密


var Film = require("../models/Films"); // 导入用户模型


var mongoose = require("mongoose"); // 操作mongoose 数据库


var searchhandler = require('./../plugins/copydouban');

var xlsx = require("xlsx"); // 自定义路由插件searchfilm


exports.plugin = {
  name: 'films',
  register: function register(server, options, next) {
    // 影片接口
    server.route([// 获取影片接口
    {
      method: 'GET',
      path: '/getfilms/{id?}',
      handler: function handler(request, h) {
        var decoded;
        return regeneratorRuntime.async(function handler$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('调用film');
                console.log(request.query.id); // 如果有id 则请求单条 如果没有则请求全部影片

                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
                return _context.abrupt("return", Film.find(request.query.id ? {
                  _id: mongoose.Types.ObjectId(request.query.id)
                } : {}).then(function (article) {
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

              case 4:
              case "end":
                return _context.stop();
            }
          }
        });
      }
    }]), // 获取上传的影片
    server.route([// 获取影片接口
    {
      method: 'GET',
      path: '/getmyfilms',
      handler: function handler(request, h) {
        var decoded;
        return regeneratorRuntime.async(function handler$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('调用我上传的film');
                console.log(request.query.id); // 如果有id 则请求单条 如果没有则请求全部影片

                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
                return _context2.abrupt("return", Film.find({
                  user_id: mongoose.Types.ObjectId(decoded.id)
                }).then(function (article) {
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

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        });
      }
    }]), // 模糊查询
    server.route([// 获取影片接口
    {
      method: 'GET',
      path: '/searchfilm',
      handler: function handler(request, h) {
        var decoded, reg;
        return regeneratorRuntime.async(function handler$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(request.query.filmname);
                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
                reg = new RegExp(request.query.filmname);
                return _context3.abrupt("return", Film.find(request.query.filmname === '' ? {} : {
                  filmname: {
                    $regex: reg
                  }
                }).then(function (article) {
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

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        });
      }
    }]), //   上传excel
    server.route({
      path: "/uploadExcel",
      method: "POST",
      handler: function handler(request, h) {
        var decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
        var workbook = xlsx.read(request.payload.file, {
          type: 'buffer'
        });
        var sheetNames = workbook.SheetNames;
        worksheet = workbook.Sheets[sheetNames[0]];
        var xmljson = xlsx.utils.sheet_to_json(worksheet);
        console.log(xmljson);
        var mongojson = [];
        mongojson = xmljson.map(function (iterator) {
          return {
            "filmname": iterator.影片名字,
            "sourcecode": iterator.资源码 ? iterator.资源码 : '',
            "dbscore": iterator.评分,
            "coverurl": iterator.封面地址,
            "typelabel": iterator.类型,
            "user_id": decoded.id,
            "user_name": decoded.username,
            "filmlist_id": iterator.属于系列 ? iterator.属于系列 : ''
          };
        });
        console.log(mongojson);
        return Film.insertMany(mongojson).then(function (film) {
          if (film) {
            return {
              code: 0,
              data: film
            };
          } else {
            return {
              code: -1,
              msg: "找不到相关文章!"
            };
          }
        });
      }
    }), // 删除指定影片
    server.route([// 删除指定影片
    {
      method: 'POST',
      path: '/delfilms',
      handler: function handler(request, h) {
        var decoded;
        return regeneratorRuntime.async(function handler$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('调用删除');
                console.log(request.payload.ids); // 如果有id 则请求单条 如果没有则请求全部影片

                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
                return _context4.abrupt("return", Film.deleteMany({
                  _id: {
                    $in: request.payload.ids
                  }
                }).then(function (article) {
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

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        });
      }
    }]), // 豆瓣查询影片
    server.route([// 豆瓣查询影片
    {
      method: 'GET',
      path: '/searchfilmbydouban',
      handler: function handler(request, h) {
        var end;
        return regeneratorRuntime.async(function handler$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                end = searchhandler(request.query.filmname);
                return _context5.abrupt("return", end.then(function (res) {
                  // console.log(res)
                  return {
                    code: 0,
                    data: res
                  };
                }));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        });
      }
    }]), server.route([// 豆瓣插入影片
    {
      method: 'POST',
      path: '/savefilmbydouban',
      handler: function handler(request, h) {
        var decoded, mongodata;
        return regeneratorRuntime.async(function handler$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // console.log(mongodata)
                decoded = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
                mongodata = {
                  "filmname": request.payload.filmname,
                  "sourcecode": request.payload.sourcecode,
                  "dbscore": request.payload.dbscore,
                  "coverurl": request.payload.coverurl,
                  "typelabel": request.payload.typelabel,
                  "user_id": mongoose.Types.ObjectId(decoded.id),
                  "user_name": decoded.username,
                  "desc": request.payload.desc,
                  "filmlist_id": request.payload.filmlist_id
                };
                return _context6.abrupt("return", Film.create(mongodata).then(function (article) {
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

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        });
      }
    }]);
  }
};