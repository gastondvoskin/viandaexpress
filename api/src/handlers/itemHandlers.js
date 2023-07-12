const {
  postItemController,
} = require("../controllers/itemControllers/postItemController");
const {
  putItemController,
} = require("../controllers/itemControllers/putItemController");
const {
  deleteItemController,
} = require("../controllers/itemControllers/deleteItemController");

const postItemHandler = async (req, res) => {
  try {
    // const {userId} = req.params
    const { userEmail, FoodId, quantity, final_price } = req.body;

    const addItem = await postItemController(
      userEmail,
      FoodId,
      quantity,
      final_price
    );
    res.status(200).send(addItem);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteItemHandler = async (req, res) => {
  try {
    // const { itemId } = req.params;
    const {id} = req.params;
    await deleteItemController(id);
    res.status(200).send("Se eliminó con éxito");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const putItemHandler = async (req, res) => {
  try {
    // const { itemId } = req.params;
    const { id, quantity, amount } = req.body;
    console.log("putItemHandler", id, quantity, amount);
    const response = await putItemController(
      id,
      quantity,
      amount,
    );
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { postItemHandler, deleteItemHandler, putItemHandler };
