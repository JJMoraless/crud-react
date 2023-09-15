import Joi from "joi";

const email = Joi.string().email();
const password = Joi.string();
const username = Joi.string();
const description = Joi.string();
const role = Joi.string();

export const postUserShema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required(),
  description: description.required(),
  role: role.required(),
});

export const postLoginShema = Joi.object({
  email: email.required(),
  password: password.required(),
});
