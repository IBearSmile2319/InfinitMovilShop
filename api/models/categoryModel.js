const {model,Schema} = require('mongoose')

const categorySchema=new Schema({
    name:{
        type:String,
        trim:true
    },
    slug:{
        type:String,
    },
    type:{type:String},
    categoryImage:{type:String},
    parentId:{
        type:String,
    }
},{timestamps:true})

module.exports=model("Category",categorySchema)