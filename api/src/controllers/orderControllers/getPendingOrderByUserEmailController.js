const { Order, User } = require("../../db");

const getPendingOrderByUserEmailController = async (userEmail) => {
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });

  const userOrder = await Order.findOne({
    where: {
      UserId: user.dataValues.id,
      status: "PENDIENTE",
    },
  });

  return userOrder.dataValues.id;
};

module.exports = { getPendingOrderByUserEmailController };
