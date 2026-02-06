import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
const app: Application = express();

dotenv.config();
app.use(express.json());
console.log("first");
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

export default app;
