const router = require('express').Router();
const Product = require('../model/Product');
const User = require('../model/User');
const verify = require('../middleware/verify');
const jwt = require('jsonwebtoken');

router.post('/', verify, async (req, res) => {
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);

  let user = await User.findOne({ _id: verified._id });

  const cart = user.cart;
  if (cart.length === 0) {
    return res.status(400).send(JSON.stringify('Empty Cart'));
  }
  let address = user.address;
  let price = 0;
  var finalProducts = [];
  for (let i = 0; i < cart.length; i++) {
    const product = await Product.findOne({ _id: cart[i].product });
    finalProducts.push(product._id);
    price = price + product.price;
  }
  let orderss = user.orders;
  let selectedAddress = '';

  address = address.filter((item) => {
    return item.isDefault === 1;
  });
  if (address.length === 0) {
    return res.status(400).send(JSON.stringify('Please select a address'));
  }
  selectedAddress =
    address[0].flat + ', ' + address[0].line1 + ', ' + address[0].line2;
  const order = {
    products: finalProducts,
    cost: price,
    address: selectedAddress,
  };

  orderss.push(order);

  user = await User.findOneAndUpdate(
    { _id: verified._id },
    { orders: orderss }
  );

  user = await User.findOneAndUpdate({ _id: verified._id }, { cart: [] });
  user = await User.findOne({ _id: verified._id });
  res.send(user);
});

module.exports = router;
