import Joi from "joi";

const title = Joi.string();
const category = Joi.string();
const stockist = Joi.string();
const store = Joi.string();
const description = Joi.string();

export const postProductShema = Joi.object({
  title: title.required(),
  category: category.required(),
  stockist: stockist.required(),
  store: store.required(),
  description: description.required(),
});
