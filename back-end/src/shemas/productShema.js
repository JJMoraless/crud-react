import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const title = Joi.string();
const category = Joi.string();
const supplier = Joi.string();
const seller = Joi.string();
const description = Joi.string();
const stock = Joi.number().integer();

export const postProductShema = Joi.object({
  title: title.required(),
  category: category.required(),
  supplier: supplier.required(),
  seller: seller.required(),
  description: description.required(),
  stock: stock.required(),
});

export const getProductSchema = Joi.object({
  id: Joi.objectId(),
});
