const { Food } = require('../../db');

const putFoodController = async (id, name, diet, description, image, initial_price, discount, final_price, status, category) => {
    console.log(id);
    const food = await Food.update({
        name, diet, description, image, initial_price, discount, final_price, status, category
    }, {
        where: { id }
    });
    return food;
};

module.exports = { putFoodController };