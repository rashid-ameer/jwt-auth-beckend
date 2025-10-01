import express from "express";
import authRouter from "./routes/auth.route.js";

const app = express();

// basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// health check
app.get("/", (_, res) => {
  res.json({ status: "Healthy" });
});

// app routes
app.use("/auth", authRouter);

export default app;
