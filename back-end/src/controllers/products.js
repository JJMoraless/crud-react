import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
import { request, response } from "express";
import { ObjectId } from "mongodb";
const Product = db.collection("product");

export class ProductsCrll {
  static async create(req = request, res) {
    const productoCreate = await Product.insertOne(req.body);
    resOk(res, { product: productoCreate });
  }

  static async get(req = request, res) {
    const producsFound = await Product.find().toArray();
    resOk(res, { products: producsFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const producsFound = await Product.findOne({ _id: new ObjectId(id) });
    resOk(res, { products: producsFound });
  }

  static async put(req = request, res) {
    const { id } = req.params;
    const { product } = req.body;

    const productoCreate = await Product.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...product } }
    );

    resOk(res, { product: productoCreate });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
