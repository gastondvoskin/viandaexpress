const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const deleteItemController = async (id) => {
  try {
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

    // // const item = await Item.findByPk(itemId, {
    // //   attributes: ["price"],
    // // });

    await Item.destroy({
      where: {
       id:id,
      },
    });

    // await updateCartTotalPrice(OrderId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteItemController };
