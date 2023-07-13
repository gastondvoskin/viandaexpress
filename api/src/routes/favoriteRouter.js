const { Router } = require("express");
const { postFavoriteHandler } = require("../handlers/favoriteHandlers");

const favoriteRouter = Router();

favoriteRouter.post("/", postFavoriteHandler);

module.exports = { favoriteRouter };
