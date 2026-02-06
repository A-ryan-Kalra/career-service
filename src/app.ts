import express, { Application, Request, Response } from "express";

import rateRoutes from "./routes/rate.route";
import { env } from "./config/env";
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

app.use(express.json());

app.get("/healthz", (req, res) => {
  res.send({ message: "Healthy.." });
});

app.use(errorHandler);

// Routes
app.use("/api", rateRoutes);

export default app;
