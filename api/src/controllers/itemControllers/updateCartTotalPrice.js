const { Item, Order } = require("../../db")
const updateCartTotalPrice = async (orderId) => {
  const cart = await Order.findByPk(orderId, {
    include: {
      model: Item,
      attributes: ['amount'],
    },
  });
  console.log("cart", cart);

  const total_price = cart.Items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  console.log("uspdate", total_price, cart.dataValues.Items);
  await Order.update(
    { total_price },
    {
      where: {
        id: orderId,
      },
    }
  );
};

module.exports = { updateCartTotalPrice }