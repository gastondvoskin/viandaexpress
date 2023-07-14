const { Order, Item, Food } = require("../../db");

const getOrderByUserIdController = async (userId) => {
  const orderByUserId = await Order.findAll({
    where: {
      UserId: userId,
      status: "PENDIENTE",
    },
    include: {
      model: Item,
      include: Food,
    },
  });

  return orderByUserId;
};

module.exports = { getOrderByUserIdController };
