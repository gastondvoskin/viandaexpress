const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const deleteItemController = async (userEmail, FoodId) => {
  try {
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
    
    await Item.destroy({
      where: {
        OrderId: userOrder.dataValues.id,
        FoodId,
      },
    });

    await updateCartTotalPrice(userOrder.dataValues.id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteItemController };