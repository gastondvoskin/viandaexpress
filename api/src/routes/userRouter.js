const { Router } = require("express");
const {
  getUserHandler,
  postUserHandler,
  putUserHandler,
  putAddressHandler,
} = require("../handlers/userHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/:email", putUserHandler);
userRouter.put("/address", putAddressHandler)

module.exports = { userRouter };
