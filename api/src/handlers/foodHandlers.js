const {getFoodController,postFoodController,putFoodController} = require('../controllers/foodControllers');


const getFoodHandler = (req,res) => {
    try {
        getFoodController()
        res.status(200).send(`deberia traer todas las viandas`)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
};

const postFoodHandler = (req,res) => {
    try {
        postFoodController()
        res.status(200).send('Deberia crear una nueva vianda')
    } catch (error) {
        res.status(400).send({error: error.message})
    }
};

const putFoodHandler = (req,res) =>{
    try {
        putFoodController()
        res.status(200).send('Deberia modificar una vianda')
    } catch (error) {
        res.status(400).send({error: error.message})
    }
};

module.exports = {getFoodHandler,postFoodHandler,putFoodHandler}