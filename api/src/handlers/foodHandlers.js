const { getAllFoodController } = require('../controllers/allFoodControllers');


const getAllFoodHandler = (req,res) => {
    try {
        const allFood = getAllFoodController();
        res.status(200).send(allFood)
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

const getFoodByNameHandler = (req, res) => {
    try {
        const {name} = req.query;
        const foodByName = getFoodByNameController(name);
        res.status(200).send(foodByName);        
    } catch (error) {
        res.status(400).send({error: error.message}); 
    }
}


module.exports = {getAllFoodHandler,getFoodByNameHandler,postFoodHandler,putFoodHandler}