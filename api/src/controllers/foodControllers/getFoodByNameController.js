const { getAllFoodController } = require("./getAllFoodsController");


function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const getFoodByNameController = async (name) => {
  const allFood = await getAllFoodController();
  let results = await allFood.filter((food) =>
    removeAccents(food.name.toLowerCase()).includes(removeAccents(name.toLowerCase()))
  );
  return results.length !== 0
    ? results
    : []
};

module.exports = { getFoodByNameController };