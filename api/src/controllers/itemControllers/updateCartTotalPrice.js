const {Item,Order} = require("../../db")
const updateCartTotalPrice = async (orderId) => {
    const cart = await Order.findByPk(orderId, {
      include: {
        model: Item,
        attributes: ['quantity', 'price'],
      },
    });
  
    // Calcular el nuevo total_price
    const total_price = cart.Items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  
    // Actualizar el total_price en la base de datos
    await Order.update(
      { total_price },
      {
        where: {
          id: orderId,
        },
      }
    );
  }

  module.exports = {updateCartTotalPrice}