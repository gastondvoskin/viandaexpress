const { Order } = require("../../db");


const getOrdersController = async (id) => {
    const orderById = await Order.findByPk(id);
    return orderById;
};

module.exports = { getOrdersController }