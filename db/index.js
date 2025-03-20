import mongoose from 'mongoose';
import { mongo } from '../config/environment';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(mongo.url); // No need for deprecated options
    isConnected = db.connections[0].readyState === 1; // Check if connection is successful

    console.log(`✅ MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    throw new Error(err);
  }
};

export default connectDB;
