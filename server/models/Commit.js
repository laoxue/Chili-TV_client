const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 评论
var CommitModelSchema = new Schema({
    content: {type:String},
    film_id:{
      type: Schema.Types.ObjectId,
      ref : 'Film'
    },
    commitdate:  {type:Date},
    user_id: {type:Schema.Types.ObjectId, ref:'User'},
}, {collection: "commits"});

module.exports = Commit = mongoose.model('Commit', CommitModelSchema);