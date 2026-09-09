import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  } 
};

export default connectDB;