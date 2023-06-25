const { Food } = require('../../db');

const deleteFoodController = async (foodId) => {
    await Food.destroy({
        where: { id: foodId }
    });
};

module.exports = { deleteFoodController };