const { Favorite } = require("../../db");

const postFavoriteController = async (userId, foodId) => {
    console.log("testing postFavoriteController");
    /* const newFavorite = await Favorite.create(userId, foodId);
    return newFavorite.dataValues; */
  };
  
  module.exports = { postFavoriteController };
  