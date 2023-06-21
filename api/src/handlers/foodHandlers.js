const {getFoodByNameController} = require('../controllers/foodControllers/FoodByNameController')
const { getAllFoodController } = require('../controllers/foodControllers/allFoodControllers');

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

const postFoodHandler = (req,res) => {
    try {
        res.status(200).send('Deberia crear una vianda')
     } catch (error) {
         res.status(400).send({error: error.message}); 
     }
};


module.exports={getFoodHandler,postFoodHandler,putFoodHandler};