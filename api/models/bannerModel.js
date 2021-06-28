const {model,Schema} = require('mongoose')

const BannerSchema=new Schema({
    banners:{type:String},
    link:{type:String}
},{timestamps:true})

module.exports=model("Banners",BannerSchema)