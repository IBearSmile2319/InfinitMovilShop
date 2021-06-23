const { model, Schema } = require('mongoose')
const LocalizationModel = new Schema({
    ip:{type:String},
    country_code:{type:String},
    country_name:{type:String},
    region_code:{type:String},
    city:{type:String},
    time_zone:{type:String},
    counter:{type:Number}
},{
    timestamps:true
})


module.exports = model('Localization',LocalizationModel )