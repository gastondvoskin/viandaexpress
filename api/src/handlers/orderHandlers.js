const { getOrdersController } = require("../controllers/orderControllers/getOrdersController");
const { postOrderController } = require("../controllers/orderControllers/postOrderController");
const { putOrderController } = require("../controllers/orderControllers/putOrderController");

const getOrdersHandlers = async (req,res) => {
    try {
        const orders = await getOrdersController();
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const postOrderHandler = async (req,res) => {
    const {name} = req.body
    try {
        const newOrder = await postOrderController()
        res.status(200).send(newOrder)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const putOrderHandler = async (req,res) => {
    try {
        await putOrderController()
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};


module.exports = {getOrdersHandlers,postOrderHandler,putOrderHandler}