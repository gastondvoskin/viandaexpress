const { Food } = require('../../db');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const postFoodController = async (name, image, summary) => {
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          resource_type: 'auto', 
          allowed_formats: ['jpg', 'jpeg']
        },
        (error, result) => {
          if (error) {
            reject(new Error (error.message));
          } else {
            resolve(result);
          }
        }
      ).end(image);
    });

    const imageUrl = uploadResult.secure_url;
    const product = await Food.create({ name, image: imageUrl, summary });
    return product.dataValues;

};

module.exports = { postFoodController };
