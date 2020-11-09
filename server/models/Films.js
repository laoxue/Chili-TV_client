const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 定义一个模式 电影
var FilmModelSchema = new Schema({
    filmname: {type:String},
    sourcecode:  {type:String},
    dbscore: {type:Number},
    coverurl: {type:String, default:''},
    typelabel: {type:String , default:''},
    filmlist_id: {type:String},
    user_id: {type:Schema.Types.ObjectId, ref:'User'},
    user_name: {type:String},
    _id:{type:Schema.Types.ObjectId, ref:'Commit'},
    desc:{type:String, default:''}
    
}, {collection: "films"});

module.exports = Film = mongoose.model('Film', FilmModelSchema);