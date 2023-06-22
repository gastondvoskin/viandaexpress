const { getFoodByNameController } = require('../controllers/foodControllers/FoodByNameController');
const { getAllFoodController } = require('../controllers/foodControllers/allFoodControllers');
const { deleteFoodControllers } = require('../controllers/foodControllers/deleteFoodControllers');
const { putFoodController } = require('../controllers/foodControllers/putFoodControllers');

const getFoodHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const foodByName = await getFoodByNameController(name);
            res.status(200).send(foodByName);
        } else {
            const allFood = await getAllFoodController();
            res.status(200).send(allFood);
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

/* post: WIP */
const postFoodHandler = (req, res) => {
    try {
        res.status(200).send('Debería crear una vianda');
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const putFoodHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, diet, description, image, initial_price, discount, final_price, status, category } = req.body;
        const food = await putFoodController(id, name, diet, description, image, initial_price, discount, final_price, status, category);
        res.status(200).send(food);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const deleteFoodHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteFoodControllers(id);
        res.status(200).send("Se eliminó con éxito");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


module.exports = { getFoodHandler, postFoodHandler, putFoodHandler, deleteFoodHandler };