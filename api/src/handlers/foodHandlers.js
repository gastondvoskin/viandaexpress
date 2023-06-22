const { getFoodByNameController } = require('../controllers/foodControllers/FoodByNameController')
const { getAllFoodController } = require('../controllers/foodControllers/allFoodControllers');
const { postFoodController } = require('../controllers/foodControllers/postFoodController');
const { deleteFoodControllers } = require('../controllers/foodControllers/deleteFoodControllers')
const { putFoodController } = require('../controllers/foodControllers/putFoodControllers')


const getFoodHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const foodByName = await getFoodByNameController(name);
            console.log(name)
            console.log(foodByName)
            res.status(200).send(foodByName);
        } else {
            const allFood = await getAllFoodController();
            console.log('All')
            res.status(200).send(allFood)
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const deleteFoodHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteFoodControllers(id)


        res.status(200).send("Se elimino con exito")
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


const postFoodHandler = async (req, res) => {
    const { summary, name } = req.body;
    const image = req.file.buffer; 

    try {
        if (summary && name && image) {
            const newFood = await postFoodController(name, image, summary);
            res.status(200).send(newFood);
        } else {
            throw new Error('Falta información en el cuerpo de la solicitud o la imagen no es válida');
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
  }


const putFoodHandler = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, diet, description, image, initial_price, discount, final_price, status, category } = req.body;
        const food = await putFoodController(id, name, diet, description, image, initial_price, discount, final_price, status, category)
        res.status(200).send(food)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

};

  

module.exports = { getFoodHandler, postFoodHandler, putFoodHandler, deleteFoodHandler };