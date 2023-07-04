const { Router } = require("express");
const { getOrdersHandler, postOrderHandler, putOrderHandler, getOrderByUserIdHandler } = require("../handlers/orderHandlers");
const orderRouter = Router();


orderRouter.get("/", getOrdersHandler )
orderRouter.get("/order",getOrderByUserIdHandler)
orderRouter.post("/", postOrderHandler )
orderRouter.put("/", putOrderHandler )



module.exports = {orderRouter}