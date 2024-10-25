import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const dbConnection = () => {
  // Log the MONGO_URI to ensure it's being read
  console.log("MONGO_URI from .env:", process.env.MONGO_URI);

  // Check if MONGO_URI is available
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is undefined! Please check your .env file.");
    return;
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM", // Set the dbName or include it in the URI
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};
