const {getFoodByNameController} = require('../controllers/foodControllers/FoodByNameController')
const { getAllFoodController } = require('../controllers/foodControllers/allFoodControllers');
const { postFoodController } = require('../controllers/foodControllers/postFoodController');

const getFoodHandler = async (req,res) => {
    const {name} = req.query;
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
        res.status(400).send({error: error.message}); 
    }
};

const putFoodHandler = (req,res) => {
    try {
       res.status(200).send('Deberia modificar una vianda')
    } catch (error) {
        res.status(400).send({error: error.message}); 
    }
};

const postFoodHandler = async (req, res) => {
    const { summary } = req.body;
    const name = req.body.name;
    const image = req.file; // Obtener el archivo subido desde req.file
  
    try {
      const newFood = await postFoodController(name, image, summary);
      res.status(200).send(newFood);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  

module.exports={getFoodHandler,postFoodHandler,putFoodHandler};