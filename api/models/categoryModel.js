const {model,Schema} = require('mongoose')

const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    categoryImage:{type:String},
    parentId:{
        type:String,
    }
},{timestamps:true})

module.exports=model("Category",categorySchema)