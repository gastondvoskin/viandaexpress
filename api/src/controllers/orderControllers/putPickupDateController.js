const { Order } = require("../../db");

const putPickupDateController=async ({
    orderId,
    pickupDate
})=>{
    try {
        const pickup_date=pickupDate;
        if (orderId) {
            const orderToBeModified = await Order.findOne({
              where: {
                id: orderId,
              },
            });
            if(orderToBeModified){
                await Order.update(
                    {pickup_date},
                    {
                        where: {
                            id: orderToBeModified.dataValues.id
                        },
                    },
                )
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { putPickupDateController };