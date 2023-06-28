const { Router } = require("express");
const {
  getUserHandler,
  postUserHandler,
  putUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/:id", putUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = { userRouter };
