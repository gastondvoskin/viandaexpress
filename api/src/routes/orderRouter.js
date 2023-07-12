const { Router } = require("express");
const { getOrdersHandler, postOrderHandler, putOrderHandler, getOrderByUserIdHandler,getBestSellersHandler } = require("../handlers/orderHandlers");
const orderRouter = Router();


orderRouter.get("/", getOrdersHandler )
orderRouter.get("/order",getOrderByUserIdHandler)
orderRouter.post("/", postOrderHandler )
orderRouter.put("/", putOrderHandler )
orderRouter.get("/bestSellers", getBestSellersHandler)



module.exports = {orderRouter}