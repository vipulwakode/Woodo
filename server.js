const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const addressRoute = require('./routes/address');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const dotenv = require('dotenv');

dotenv.config();
//mongoDB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('MongoDB Connected 🔥');
  }
);

//server
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//api
app.get('/', (req, res) => {
  res.send('YO');
});

//routers
app.use('/', authRoute);
app.use('/cart', cartRoute);
app.use('/order', orderRoute);
app.use('/address', addressRoute);
app.use('/products', productRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running 🚀 on Port:${PORT}`);
});
