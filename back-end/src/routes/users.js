import { Router } from "express";
import { UserCrll } from "../controllers/users.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { postUserShema } from "../shemas/userShema.js";
import { shemasHandler } from "../middlewares/shemasHandler.js";
export const router = Router();

router.post(
  "/",
  shemasHandler(postUserShema, "body"),
  wrapError(UserCrll.create)
);
