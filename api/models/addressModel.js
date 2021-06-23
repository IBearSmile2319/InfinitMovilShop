const { model, Schema } = require('mongoose')

const addressSchema=new Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },
      mobileNumber: {
        type: String,
        required: true,
        trim: true,
      },
      pinCode: {
        type: String,
        required: true,
        trim: true,
      },
      locality: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
      },
      address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
      },
      cityDistrictTown: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        required: true,
      },
      landmark: {
        type: String,
        min: 10,
        max: 100,
      },
      alternatePhone: {
        type: String,
      },
      addressType: {
        type: String,
        required: true,
        enum: ["home", "work"],
        required: true,
      },
    }
)
// B
const userAddressSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      address: [addressSchema],
    },
    { timestamps: true }
  );
model('Address',addressSchema)
module.exports = model("userAddress",userAddressSchema)