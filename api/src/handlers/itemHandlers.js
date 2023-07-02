const {
  postItemController,
} = require("../controllers/itemControllers/postItemController");

const getItemByOrderIdHandlers = async (req, res) => {};

const postItemHandler = async (req, res) => {
  try {
    const {
      food_name,
      food_image,
      quantity,
      final_price,
      amount,
      OrderId,
      FoodId,
    } = req.body;
    const newItem = await postItemController(
      food_name,
      food_image,
      quantity,
      final_price,
      amount,
      OrderId,
      FoodId
    );
    res.status(200).send(newItem);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const putItemHandler = async (req, res) => {};

const delItemHandler = async (req, res) => {};

module.exports = {
  getItemByOrderIdHandlers,
  postItemHandler,
  putItemHandler,
  delItemHandler,
};
