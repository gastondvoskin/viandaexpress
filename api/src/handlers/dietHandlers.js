const {getDietsController} = require('../controllers/dietsControllers');

const getDietsHandler = (req,res) =>{
    try {
        getDietsController()
        res.status(200).send('deberia traer todas las dietas')
    } catch (error) {
        res.status(400).send({error:error.message})
    }
};

module.exports = {getDietsHandler}