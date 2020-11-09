const hapi = require("hapi"); // 引入hapi
const Inert = require("inert"); // 引入静态加载
const Path = require("path"); // 引入路径
const fs = require("fs"); // 引入读取
const Vision = require('vision') // 引入接口
const Ejs = require('ejs') // 引入模板
const mongoose = require('mongoose')
// 创建接口服务器
const server = new hapi.Server({
    host: '0.0.0.0',
    routes: {
        cors: {
            origin: ["*"]
        }
    },
    port: 3000
})
// const io = require("socket.io")(server.listener)
// const routesCreate = require('./routes/createuser.route')
require('./config/index.js')
// var Schema = mongoose.Schema;
// // 定义一个模式 用户
// var UserModelSchema = new Schema({
//     username: String,
//     password: String
// }, {collection: "user"});
// var User = mongoose.model('User', UserModelSchema);
// 创建应用
// 聊天室
// io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
// io.set('origins', '*:*')
// io.on('connection',function(socket) {
//     //接收数据
//     socket.on('login', function (obj) {                
//         console.log(obj.username);
//         // 发送数据
//         socket.emit('relogin', {
//           msg: `你好${obj.username}`,
//           code: 200
//         });  
//     });
//   });
// ----------------------------------------------- 分割线 --------------------------------------------------------------------

// 链接本地数据库
const mongoDBUrl = 'mongodb://127.0.0.1/chili-tv';
server.app.db = mongoose.connect(mongoDBUrl,
    { 
        useNewUrlParser: true ,
        useUnifiedTopology:true}
)
mongoose.Promise = global.Promise;
mongoose.connection.on("connected", () => {
    console.log("mongodb数据库连接成功")
    // console.log(mongoose)
});
mongoose.connection.on("error", (error) => {
    console.log("mongodb数据库连接失败", error)
});
// ----------------------------------------------- 分割线 ---------------------------------------------------------------------
// 定义服务启动函数
const init = async () => {
    await server
    .register({
        plugin:require("./routes/Users")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })

    await server
    .register({
        plugin:require("./routes/Films")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })

    await server
    .register({
        plugin:require("./routes/Commit")
    },{
        routes:{
            // 前缀
            prefix:'/v1/chili'
        }
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })
	// await client.register(Vision)  // 注册接口
    await server.register(Inert)  // 注册静态
	// client.views({
	// 	engines: { ejs: Ejs },
	// 	path: './view',
	// 	// layout: true
	// })
    
    // 获取静态文件路由
    // client.route({
    //     path: "/index",
    //     method: "GET",
    //     handler: (request, h) => {
    //         return h.view('index',
    //         {
    //             title: '这里是后台管理',
    //             msg: '这边是后台管理部分'
    //         },
    //         {
    //             //改变视图模板在目录路径
    //             path:'./view/index'
    //         })
    //     }
	// })
	// client.route({
    //     path: "/{param*}",
    //     method: "GET",
    //     handler: (request, h) => {
    //         return h.view('index',
    //         {
    //             title: '这里是后台管理',
    //             msg: '这边是后台管理部分'
    //         },
    //         {
    //             //改变视图模板在目录路径
    //             path:'./view/index'
    //         })
    //     }
    // })
    await server.start(); // 启动服务器
    // await client.start();
    console.log(`Server running at : ${server.info.uri}`);
    // console.log(`Client running at : ${client.info.uri}`);
}

init();