const {Item,Order} = require("../../db")
const {updateCartTotalPrice} = require("./updateCartTotalPrice")

const postItemController = async (userId,foodId,quantity,price) => {
    // Buscar el carrito del usuario con estado "PENDIENTE"
    console.log("dentro del controller")
    let cart = await Order.findOne({
        where: {
          UserId: userId,
          status: 'PENDIENTE',
        },
      });
  
      // Si no existe un carrito, se crea uno nuevo
      if (!cart) {
        console.log("noHay order creo una")
        cart = await Order.create({
          UserId: userId,
          total_price: 0,
          status: 'PENDIENTE',
        });
      }
  
      // Crear el nuevo artículo y asociarlo al carrito
      console.log("por crear")
      const item = await Item.create({
        OrderId: cart.id,
        FoodId: foodId,
        quantity,
        price,
        amount: price * quantity,
      });

      console.log("cread")
      await updateCartTotalPrice(cart.id);
      console.log("Se actualiza")
      return item;
}


module.exports = {postItemController}