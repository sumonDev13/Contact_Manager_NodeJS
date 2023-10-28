import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};
