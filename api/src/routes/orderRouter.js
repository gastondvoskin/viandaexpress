const { Router } = require("express");
const { getOrdersHandler, postOrderHandler, putOrderHandler, getUserOrdersHandler,getOrderDetailHandler,getBestSellersHandler} = require("../handlers/orderHandlers");
const orderRouter = Router();


orderRouter.get("/", getOrdersHandler )
orderRouter.get("/user",getUserOrdersHandler)
orderRouter.get("/detail/:orderId",getOrderDetailHandler)
orderRouter.post("/", postOrderHandler )
orderRouter.put("/", putOrderHandler )
orderRouter.get("/bestSellers", getBestSellersHandler)



module.exports = {orderRouter}