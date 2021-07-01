const { model, Schema } = require('mongoose')

const orderSchema=new Schema(
    {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        addressId: {
          type: Schema.Types.ObjectId,
          ref: "UserAddress.address",
          required: true,
        },
        totalAmount: {
          type: Number,
          required: true,
        },
        items: [
          {
            productId: {
              type: Schema.Types.ObjectId,
              ref: "Product",
            },
            payablePrice: {
              type: Number,
              required: true,
            },
            purchasedQty: {
              type: Number,
              required: true,
            },
          },
        ],
        paymentStatus: {
          type: String,
          enum: ["pendiente", "completado", "cancelado", "reembolso"],
          required: true,
        },
        paymentType: {
          type: String,
          enum: ["cod", "card","contra entrega"],
          required: true,
        },
        orderStatus: [
          {
            type: {
              type: String,
              enum: ["ordenado", "confirmado", "enviado", "entregado"],
              default: "ordenado",
            },
            date: {
              type: Date,
            },
            isCompleted: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
      { timestamps: true }
)
module.exports = model("Order", orderSchema)