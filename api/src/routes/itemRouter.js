const { Router } = require("express");
const {
  getItemByOrderIdHandlers,
  postItemHandler,
  putItemHandler,
  delItemHandler,
} = require("../handlers/itemHandlers");
const itemRouter = Router();

itemRouter.get("/", getItemByOrderIdHandlers);
itemRouter.post("/", postItemHandler);
itemRouter.put("/:id", putItemHandler);
itemRouter.delete("/:id", delItemHandler);

module.exports = { itemRouter };
