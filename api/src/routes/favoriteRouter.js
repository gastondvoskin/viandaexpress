const { Router } = require("express");
const { postFavoriteHandler, getFavoritesByEmailHandler } = require("../handlers/favoriteHandlers");

const favoriteRouter = Router();

favoriteRouter.post("/", postFavoriteHandler);
favoriteRouter.get("/:email", getFavoritesByEmailHandler);

module.exports = { favoriteRouter };
