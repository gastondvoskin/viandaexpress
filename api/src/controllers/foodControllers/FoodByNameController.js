const { getAllFoodController } = require("./allFoodControllers");


const getFoodByNameController = async (name) => {
    
    const allFood = await getAllFoodController();
    let results = await allFood.filter((food)=>food.name.toLowerCase().includes(name.toLowerCase()));
    return results.length !== 0
        ? results
        // : new Error ('No se encontraron resultados')
        : 'No se encontraron resultados'

}

module.exports = {getFoodByNameController};