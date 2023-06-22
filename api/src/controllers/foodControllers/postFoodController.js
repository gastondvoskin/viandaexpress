const {Food} = require('../../db');

require('dotenv').config();
const {CLOUD_NAME,CLOUD_API_KEY,CLOUD_API_SECRET} = process.env;
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET
  });


const postFoodController = async (name,image,summary) => {
    const result = await cloudinary.uploader.upload(image.path)
    const imageUrl = result.secure_url
    const product = await Food.create({ name , image:imageUrl, summary })
    return product
}



module.exports = {postFoodController}