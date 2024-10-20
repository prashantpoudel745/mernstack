import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default db;
