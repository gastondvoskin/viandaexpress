const { Router } = require("express");
const { getOrdersHandlers, postOrderHandler, putOrderHandler } = require("../handlers/orderHandlers");
const orderRouter = Router();


orderRouter.get("/", getOrdersHandlers )
orderRouter.post("/", postOrderHandler )
orderRouter.put("/", putOrderHandler )


module.exports = {orderRouter}