const { User } = require("../../db");
const { Order } = require("../../db");

const postOrderController = async (email) => {

    const userByEmail = await User.findOne({
        where: { email }
    });
    const userId = userByEmail.dataValues.id

    let userOrder = await Order.findOne({
        where: {
            UserId: userId,
            status: 'PENDIENTE',
        },
    });
    if (!userOrder) {
        userOrder = await Order.create({
            UserId: userId,
            status: 'PENDIENTE',
        });
        return userOrder;
    };
    return userOrder;
};

module.exports = { postOrderController }