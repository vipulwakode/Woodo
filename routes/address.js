const router = require('express').Router();
const User = require('../model/User');
const { addressValidation } = require('../validation');
const verify = require('../middleware/verify');
const jwt = require('jsonwebtoken');

//add address
router.post('/', verify, async (req, res) => {
  const data = req.body;

  const { error } = addressValidation(data);
  if (error)
    return res.status(400).send(JSON.stringify(error.details[0].message));

  const token = req.header('auth-token');

  const verified = jwt.verify(token, process.env.SECRET);

  let user = await User.findOne({ _id: verified._id });
  let addresses = user.address;
  const newData = {
    flat: data.flat,
    line1: data.line1,
    line2: data.line2,
    isDefault: data.isDefault ? 1 : 0,
  };
  addresses.push(newData);

  user = await User.findOneAndUpdate(
    { _id: verified._id },
    { address: addresses }
  );

  user = await User.findOne({ _id: verified._id });

  res.send(user);
});

//delete address
router.delete('/:id', verify, async (req, res) => {
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);
  let user = await User.findOne({ _id: verified._id });
  let addresses = user.address;
  addresses = addresses.filter((item) => {
    return req.params.id !== item.id;
  });
  user = await User.findOneAndUpdate(
    { _id: verified._id },
    { address: addresses }
  );
  user = await User.findOne({ _id: verified._id });

  res.send(user);
});

//update is default

router.put('/:id', async (req, res) => {
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.SECRET);
  let user = await User.findOne({ _id: verified._id });
  let addresses = user.address;

  for (var i = 0; i < addresses.length; i++) {
    if (addresses[i].isDefault === 1) {
      addresses[i].isDefault = 0;
    }
    if (req.params.id === addresses[i].id) {
      addresses[i].isDefault = 1;
    }
  }

  user = await User.findOneAndUpdate(
    { _id: verified._id },
    { address: addresses }
  );
  user = await User.findOne({ _id: verified._id });
  res.send(user);
});

module.exports = router;
