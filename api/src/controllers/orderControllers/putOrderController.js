const { Order, User } = require("../../db");

const putOrderController = async (
  userEmail,
  payment_id,
  status,
  merchant_order_id
) => {
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });

  const orderToBeModified = await Order.findOne({
    where: {
      UserId: user.dataValues.id,
      status: "PENDIENTE",
    },
  });

  await Order.update(
    { payment_id, status, merchant_order_id },
    {
      where: {
        id: orderToBeModified.dataValues.id,
      },
    }
  );
  return "Oder aactualizada correctamente";
};

module.exports = { putOrderController };
