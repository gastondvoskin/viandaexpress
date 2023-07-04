const { Item, Order } = require("../../db")
const { updateCartTotalPrice } = require("./updateCartTotalPrice")

const postItemController = async (userId, orderId, foodId, quantity, final_price) => {
  // Buscar el carrito del usuario con estado "PENDIENTE"
  const itemAmount = final_price * quantity;
  let userOrder = await Order.findOne({
    where: {
      UserId: userId,
      status: 'PENDIENTE',
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
    OrderId: orderId,
    FoodId: foodId,
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
};


module.exports = { postItemController }

