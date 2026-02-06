import { Request, Response, NextFunction } from "express";
import { RateRequestSchema } from "../models/rate-request";
import { getRates } from "../service/rate.service";

export async function rateController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const parsed = RateRequestSchema.parse(req.body);
    const rates = await getRates(parsed);
    res.json(rates);
  } catch (err) {
    next(err);
  }
}
