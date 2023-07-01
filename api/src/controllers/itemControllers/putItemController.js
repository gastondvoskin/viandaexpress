const {Item} = require("../../db")

const putItemController = async (itemId, quantity) => {
    await Item.update(
        { quantity },
        {
          where: {
            id: itemId,
          },
        }
      );
  
      // Obtener el ID del carrito asociado al artículo
      const item = await Item.findOne({
        where: {
          id: itemId,
        },
      });
      const cartId = item.OrderId;
  
      // Actualizar el total_price del carrito
      await updateCartTotalPrice(cartId);
      return 'Actualizado correctamente'

}

module.exports = {putItemController}