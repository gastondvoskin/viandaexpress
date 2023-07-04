const { Item, Order, User } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

// const postItemController = async (userId, orderId, foodId, quantity, final_price) => {
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
    //   // Si no existe un carrito, se crea uno nuevo
    //   if (!cart) {
    //     cart = await Order.create({
    //       UserId: userId,
    //       total_price: 0,
    //       status: 'PENDIENTE',
    //     });
    //   }

    // Crear el nuevo artículo y asociarlo al carrito
    const newItem = await Item.create({
      OrderId: userOrder.dataValues.id,
      FoodId,
      quantity,
      final_price,
      amount: itemAmount,
    });

    // await Order.update(
    //   // { total_price: Sequelize.literal(`total_price + ${amount}`) },
    //   { total_price: userOrder.dataValues.total_price + itemAmount },
    //   {
    //     where: {
    //       id: userOrder.dataValues.id,
    //     },
    //   }
    // );
    console.log("conroller", userOrder.dataValues.id);
    await updateCartTotalPrice(userOrder.dataValues.id);

    return newItem;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postItemController };
