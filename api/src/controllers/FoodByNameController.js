const { getAllFoodHandler } = require('../handlers/foodHandlers');

const getFoodByNameController = async(name) => {
    const allFood = await getAllFoodHandler();
    if(name){
        let foodByName = await allFood.filter((food)=>food.name.toLowerCase().includes(name.toLowerCase()));
        return foodByName.length ?
        foodByName
        :
        new Error('La Comida busca no existe');
    }else{
        return allFood;
    }
}

module.exports = {getFoodByNameController};