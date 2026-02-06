import express from "express";
import { rateController } from "../controller/rate.controller";

const router = express.Router();
router.post("/rates", rateController);

export default router;
