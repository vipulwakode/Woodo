const router = require('express').Router();
const Product = require('../model/Product');
const User = require('../model/User');
const verify = require('../middleware/verify');
const jwt = require('jsonwebtoken');

router.post('/', verify, async (req, res) => {
  const data = req.body;
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);

  let user = await User.findOne({ _id: verified._id });

  let carts = user.cart;

  const produc = await Product.findOne({ code: data.code });
  carts.push({ product: produc._id });

  user = await User.findOneAndUpdate({ _id: verified._id }, { cart: carts });

  user = await User.findOne({ _id: verified._id });
  res.send(user);
});

// delete item in cart
router.delete('/:id', verify, async (req, res) => {
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);
  let user = await User.findOne({ _id: verified._id });
  let carts = user.cart;
  carts = carts.filter((item) => {
    return req.params.id !== item.id;
  });
  user = await User.findOneAndUpdate({ _id: verified._id }, { cart: carts });
  user = await User.findOne({ _id: verified._id });

  res.send(user);
});
module.exports = router;
