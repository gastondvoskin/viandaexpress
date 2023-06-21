const { Food, Diet } = require('../db');

const getAllFoodController = async() =>{
    const allFood = await Food.findAll({
        include:{
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    return allFood;
};

module.exports = {getAllFoodController};