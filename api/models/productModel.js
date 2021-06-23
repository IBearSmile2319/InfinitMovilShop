const { model, Schema } = require('mongoose')
const productSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
    },
    quantity:{
        type:Number,
    },
    description: {
        type: String,
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
    category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    createdBy: { type: Schema.Types.ObjectId, ref: 'Users' },
    updateAt: Date,

}, { timestamps: true })

module.exports = model('Product', productSchema)