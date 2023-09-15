import { request, response } from "express";

import db from "../../db/conection.js";
import { resOk } from "../utils/functions.js";
import { hash } from "bcrypt";
import { ClientError } from "../utils/errors.js";
const User = db.collection("users");

export class UserCrll {
  static async create(req, res) {
    const user = req.body;

    const checkEmail = await User.findOne({ email: user.email });
    if (checkEmail) {
      throw new ClientError("email is already in use");
    }

    const userCreated = await User.insertOne({
      ...user,
      password: await hash(user.password, 10),
    });

    resOk(res, { user_create: userCreated });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async delete(res, req = request) {}
}
