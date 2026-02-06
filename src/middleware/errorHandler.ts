import { Request, Response, NextFunction } from "express";
import { AppError } from "../models/error";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      code: err.code,
      message: err.message,
    });
  }

  return res.status(500).json({
    code: "INTERNAL_ERROR",
    message: "Unexpected error occurred",
  });
}
