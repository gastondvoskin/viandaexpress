const { Item, Order, User } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const postItemController = async (userEmail, FoodId, quantity, final_price) => {
  // Buscar el carrito del usuario con estado "PENDIENTE"
  try {
    const itemAmount = final_price * quantity;

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

    // Crear el nuevo artículo y asociarlo al carrito
    const newItem = await Item.create({
      OrderId: userOrder.dataValues.id,
      FoodId,
      quantity,
      final_price,
      amount: itemAmount,
    });

    await updateCartTotalPrice(userOrder.dataValues.id);

    return newItem;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postItemController };
