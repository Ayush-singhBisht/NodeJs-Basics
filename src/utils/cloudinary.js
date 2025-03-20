import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
// const fs = require("fs");
import fs from "fs";
import { CLIENT_RENEG_LIMIT, CLIENT_RENEG_WINDOW } from "tls";
dotenv.config({
  path: "./src/.env",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log("cloudinary.config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File Uploaded On cloudinary. File src :" + response.url);
    //delete file after upload
    fs.unlinkSync(localFilePath);
    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteFromColudniary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Delete from cloudinary. Public Id", publicId);
  } catch (error) {
    console.log("Error Deleting from cloudinary", error);
  }
};

export { uploadOnCloudinary, deleteFromColudniary };
