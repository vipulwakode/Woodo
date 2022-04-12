const Joi = require('joi');
const joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const productValidation = (data) => {
  const schema = Joi.object({
    code: Joi.string().required(),
    productName: Joi.string().required(),
    price: Joi.number().required(),
  });
  return schema.validate(data);
};
const addressValidation = (data) => {
  const schema = Joi.object({
    flat: Joi.number(),
    line1: Joi.string(),
    line2: Joi.string(),
    isDefault: Joi.number(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.productValidation = productValidation;
module.exports.addressValidation = addressValidation;
