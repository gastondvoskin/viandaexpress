const { Router } = require("express");
const {
  createPreferenceHandler,
  getInfo,
} = require("../handlers/shoppingCartHandlers");

const mercadopagoRouter = Router();

mercadopagoRouter.post("/", createPreferenceHandler);
mercadopagoRouter.get("/feedback", getInfo);

module.exports = { mercadopagoRouter };
