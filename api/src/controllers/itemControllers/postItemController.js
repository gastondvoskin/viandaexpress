const { Item } = require("../../db");

const postItemController = async (
  food_name,
  food_image,
  quantity,
  final_price,
  amount,
  OrderId,
  FoodId
) => {
  const newItem = await Item.create({
    food_name,
    food_image,
    quantity,
    final_price,
    amount,
    OrderId,
    FoodId,
  });
  return newItem.dataValues;
};

module.exports = { postItemController };
