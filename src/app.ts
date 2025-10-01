import express from "express";

// app instance
const app = express();

// health check
app.get("/", (_, res) => {
  res.json({ status: "Healthy" });
});

export default app;
