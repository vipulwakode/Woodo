const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/user', async (req, res) => {
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);
  let user = await User.findOne({ _id: verified._id });
  res.send(user);
});

router.post('/register', async (req, res) => {
  const data = req.body;
  const { error } = registerValidation(data);
  if (error)
    return res.status(400).send(JSON.stringify(error.details[0].message));

  const emailExists = await User.findOne({ email: data.email });
  if (emailExists) {
    return res.status(400).send(JSON.stringify('Email already exists'));
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(data.password, salt);

  const user = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send('Server Error');
  }
});

router.post('/login', async (req, res) => {
  const data = req.body;
  const { error } = loginValidation(data);
  if (error) {
    return res.status(400).send(JSON.stringify(error.details[0].message));
  }

  const user = await User.findOne({ email: data.email });
  if (!user) {
    return res.status(400).send(JSON.stringify('Invalid Credentials'));
  }

  const validPass = await bcrypt.compare(data.password, user.password);
  if (!validPass) {
    return res.status(400).send(JSON.stringify('Invalid Credentials'));
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET);
  res.header('auth-token', token).send(JSON.stringify(token));
});

module.exports = router;
