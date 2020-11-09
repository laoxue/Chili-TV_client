const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 用户
var UserModelSchema = new Schema({
    username: {type:String},
    password:  {type:String},
    sex: {type:String},
    remark: {type:String, default:''},
    headUrl: {type:String , default:''}
}, {collection: "user"});

module.exports = User = mongoose.model('User', UserModelSchema, 'user');