import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import rateRoutes from "./routes/rate.route";
import { errorHandler } from "./middleware/errorHandler";
const app: Application = express();

dotenv.config({ path: ".env.example", override: true });

app.use(express.json());

// Routes
app.use("/api", rateRoutes);

app.use(errorHandler);

export default app;
