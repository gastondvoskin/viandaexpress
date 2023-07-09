const { Order } = require("../../db");


const getOrdersController = async () => {
    const allOrders = await Order.findAll({
      include: [
        {
          model: Item,
          include: [
            {
              model: Food
            }
          ]
        }
      ]
    });
    return allOrders;
  };

module.exports = { getOrdersController }