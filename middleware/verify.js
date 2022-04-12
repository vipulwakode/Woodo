const jwt = require('jsonwebtoken');
const User = require('../model/User');

const check = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send('Access Denied');
  }

  try {
    const id = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ _id: id._id });
    if (!user) {
      res.status(401).send('Access Denied');
    }
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = check;
