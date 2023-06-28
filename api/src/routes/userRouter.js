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
// Esta ruta podria no hacer falta, queda comentada en caso de que se la necesite.
// userRouter.delete("/:id", deleteUserHandler); 
module.exports = { userRouter };
