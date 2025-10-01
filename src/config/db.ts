import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);
    console.log(
      `Connected to database - Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in connecting database", error);
    process.exit(1);
  }
}

export default connectDB;
