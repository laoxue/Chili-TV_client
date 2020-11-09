"use strict";

var hapi = require("hapi"); // 引入hapi


var Inert = require("inert"); // 引入静态加载


var Path = require("path"); // 引入路径


var fs = require("fs"); // 引入读取


var Vision = require('vision'); // 引入接口


var Ejs = require('ejs'); // 引入模板


var mongoose = require('mongoose'); // const routesCreate = require('./routes/createuser.route')


require('./config/index.js'); // var Schema = mongoose.Schema;
// // 定义一个模式 用户
// var UserModelSchema = new Schema({
//     username: String,
//     password: String
// }, {collection: "user"});
// var User = mongoose.model('User', UserModelSchema);
// 创建应用
// ----------------------------------------------- 分割线 --------------------------------------------------------------------
// 创建接口服务器


var server = new hapi.Server({
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ["*"]
    }
  },
  port: 3000
}); // 链接本地数据库

var mongoDBUrl = 'mongodb://127.0.0.1/chili-tv';
server.app.db = mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("connected", function () {
  console.log("mongodb数据库连接成功"); // console.log(mongoose)
});
mongoose.connection.on("error", function (error) {
  console.log("mongodb数据库连接失败", error);
}); // ----------------------------------------------- 分割线 ---------------------------------------------------------------------
// 定义服务启动函数

var init = function init() {
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(server.register({
            plugin: require("./routes/Users")
          }, {
            routes: {
              // 前缀
              prefix: '/v1/chili'
            }
          })["catch"](function (err) {
            console.log(err);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(server.register({
            plugin: require("./routes/Films")
          }, {
            routes: {
              // 前缀
              prefix: '/v1/chili'
            }
          })["catch"](function (err) {
            console.log(err);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(server.register({
            plugin: require("./routes/Commit")
          }, {
            routes: {
              // 前缀
              prefix: '/v1/chili'
            }
          })["catch"](function (err) {
            console.log(err);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(server.register(Inert));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(server.start());

        case 10:
          // 启动服务器
          // await client.start();
          console.log("Server running at : ".concat(server.info.uri)); // console.log(`Client running at : ${client.info.uri}`);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

init();