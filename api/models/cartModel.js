const { model, Schema } = require('mongoose')

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    cartItems: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, default: 1, required: true },
            price: { type: Number, required: true }
        }
    ]
}, { timestamps: true })

module.exports = model("Cart", cartSchema)