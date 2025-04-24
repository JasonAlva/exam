import { connect } from "http2";
import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  throw new Error("enter a valid uri");
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  const opts = {
    bufferCommands: false,
  };
  await mongoose.connect(mongoURI!, opts);
  return mongoose;
}

export default connectToDatabase;
