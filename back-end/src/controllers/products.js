import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
import { request } from "express";
import { ObjectId } from "mongodb";
const Product = db.collection("product");

export class ProductsCrll {
  static async create(req = request, res) {
    const productoCreate = await Product.insertOne(req.body);
    resOk(res, { product: productoCreate });
  }

  static async update(req, res) {
    const { _id, ...restProduct } = req.body;
    const productoCreate = await Product.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { ...restProduct } }
    );
    resOk(res, { msg: "funciona 2" });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
