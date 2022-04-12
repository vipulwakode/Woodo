const router = require('express').Router();
const Product = require('../model/Product');
const { productValidation } = require('../validation');

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.send(product);
  } catch (error) {
    res.status(400).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(400).send('Server Error');
  }
});

//add a product
router.post('/addProduct', async (req, res) => {
  const data = req.body;
  const { error } = productValidation(data);
  if (error) return res.status(400).send(error.details[0].message);
  const product = new Product({
    code: data.code,
    productName: data.productName,
    price: data.price,
  });

  try {
    const savedProduct = await product.save();
    res.send({ product: product._id });
  } catch (error) {
    res.status(400).send('Server Error');
  }
});

module.exports = router;
