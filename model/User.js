const { string } = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
      },
    },
  ],
  address: [
    {
      flat: {
        type: String,
      },
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      isDefault: {
        type: Number,
      },
    },
  ],
  orders: [
    {
      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
          },
        },
      ],
      cost: {
        type: Number,
      },
      address: {
        type: String,
      },
    },
  ],
});

module.exports = User = mongoose.model('user', userSchema);
