import dotenv from 'dotenv';
import app from "./app.js";  // Import the Express app
import cloudinary from "cloudinary";

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
