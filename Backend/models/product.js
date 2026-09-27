const mongoose = require('mongoose')
 var schema=mongoose.Schema({
    Name:String,
    Price:Number,
    Disc:String,
    Image:String
 })

 var ProductModel=mongoose.model("product55",schema)
 module.exports=ProductModel