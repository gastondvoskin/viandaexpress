const { Food } = require('../../db');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const path = require('path');

const postFoodController = async (name, image, summary) => {
    console.log(name,image,summary);
    cloudinary.uploader.upload_stream({ resource_type: 'auto'},async (error,result) => {
      if (error) {
        return 'Error al subir imagen a cloudinary'
      }
      const imageUrl = result.secure_url;
      const product = await Food.create({ name, image: imageUrl, summary });
      return product;
    } ).end(image);
    
  };
  


module.exports = { postFoodController };
