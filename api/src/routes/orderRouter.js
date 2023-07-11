const { Router } = require("express");
const { getOrdersHandler, postOrderHandler, putOrderHandler, getUserOrdersHandler,getOrderDetailHandler} = require("../handlers/orderHandlers");
const orderRouter = Router();


orderRouter.get("/", getOrdersHandler )
orderRouter.get("/user",getUserOrdersHandler)
orderRouter.get("/detail",getOrderDetailHandler)
orderRouter.post("/", postOrderHandler )
orderRouter.put("/", putOrderHandler )



module.exports = {orderRouter}