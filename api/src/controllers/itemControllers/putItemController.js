const {Item} = require("../../db")
const { updateCartTotalPrice } = require("./updateCartTotalPrice")

const putItemController = async (itemId, quantity) => {

    const item = await Item.findOne({
      where: {
        id: itemId,
      },
    });

    await Item.update(
        { quantity , amount: item.price * quantity},
        {
          where: {
            id: itemId,
          },
        }
      );
  
      // Obtener el ID del carrito asociado al artículo

      const cartId = item.OrderId;
  
      // Actualizar el total_price del carrito
      await updateCartTotalPrice(cartId);
      return 'Actualizado correctamente'

}

module.exports = {putItemController}