const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const putItemController = async (id, quantity, amount) => {
  await Item.update(
    {quantity,amount},
    {
    where: {
      id
    },
  });

// const putItemController = async (id, quantity, amount) => {
  // const user = await User.findOne({
  //   where: {
  //     email: userEmail,
  //   },
  // });

  // const userOrder = await Order.findOne({
  //   where: {
  //     UserId: user.dataValues.id,
  //     status: "PENDIENTE",
  //   },
  // });

  // const itemToBeModified = await Item.findOne({
  //   where: {
  //     id,
  //   },
  // });

  // await Item.update(
  //   { quantity, amount},
  //   {
  //     where: {
  //       id,
  //     },
  //   }
  // );

  // await updateCartTotalPrice(userOrder.dataValues.id);
  return "Item actualizado correctamente";
};

module.exports = { putItemController };
