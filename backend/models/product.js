const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imgs: [
    {
      hex: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
  },
  fastShipping: {
    type: Boolean,
  },
  isNewProd: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", productSchema);
