const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = Product = mongoose.model('product', productSchema);
