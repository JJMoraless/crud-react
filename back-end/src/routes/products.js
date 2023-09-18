import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { shemasHandler } from "../middlewares/shemasHandler.js";
import { getProductSchema, postProductShema } from "../shemas/productShema.js";
import { ProductsCrll } from "../controllers/products.js";
import { passportJwt } from "../utils/auth/index.js";

export const router = Router();

router.post(
  "/",
  passportJwt,
  shemasHandler(postProductShema, "body"),
  wrapError(ProductsCrll.create)
);

router.get("/", passportJwt, wrapError(ProductsCrll.get));

router.put(
  "/:id",
  passportJwt,
  shemasHandler(getProductSchema, "params"),
  wrapError(ProductsCrll.put)
);

router.get(
  "/:id",
  passportJwt,
  shemasHandler(getProductSchema, "params"),
  wrapError(ProductsCrll.getById)
);
