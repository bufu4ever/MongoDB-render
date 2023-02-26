const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Brand:String,
    },{versionKey : false}); 
module.exports = mongoose.model('product',ProductSchema);