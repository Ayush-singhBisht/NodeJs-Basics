import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({ path: "./src/.env" });
console.log(`Connecting to: ${process.env.MONGODB_URI}/${DB_NAME}`);
console.log(process.env.PORT);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/{DB_NAME}`
    );

    console.log(
      `Mongo connected!  DB Host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
