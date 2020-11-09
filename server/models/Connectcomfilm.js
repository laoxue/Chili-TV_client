const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 评论
var ZhongjianModelSchema = new Schema({
    film_id:{
      type: Schema.Types.ObjectId,
      ref : 'Film'
    },
    commit_id: {
      type: Schema.Types.ObjectId,
      ref : 'Commit'
    },
}, {collection: "fconnectc"});

module.exports = Commit = mongoose.model('fconnectc', ZhongjianModelSchema);