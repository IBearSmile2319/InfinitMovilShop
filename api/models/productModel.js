const { model, Schema } = require('mongoose')
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: { type: Number },
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: {type:Schema.Types.ObjectId, ref: 'Users'},
            review: String
        }
    ],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Users' },
    updateAt: Date,

}, { timestamps: true })

module.exports = model('Product', productSchema)