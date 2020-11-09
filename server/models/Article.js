const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 用户
var ArticleModelSchema = new Schema({
    title: {type:String},
    user_id:  {type:String},
    user_name: {type:String},
    isbanner: {type:Boolean},
    headUrl: {type:String , default:''}
}, {collection: "articles"});

module.exports = Article = mongoose.model('Article', ArticleModelSchema);