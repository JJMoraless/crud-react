import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { shemasHandler } from "../middlewares/shemasHandler.js";
import { postProductShema } from "../shemas/productShema.js";
import { ProductsCrll } from "../controllers/products.js";
import { authHandler } from "../middlewares/authHandler.js";

export const router = Router();

router.post(
  "/",
  authHandler,
  shemasHandler(postProductShema, "body"),
  wrapError(ProductsCrll.create)
);
