import "dotenv/config";
import app from "./app.js";
import { NODE_ENV, PORT } from "./constants/env.js";
import connectDB from "./config/db.js";

async function startApplication() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode.`);
  });
}

startApplication();
