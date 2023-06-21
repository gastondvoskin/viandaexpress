const { getDietsController } = require('../controllers/dietsControllers');

const getDietsHandler = async (req,res) =>{
    try {
        const allDiets = getDietsController()
        res.status(200).send(allDiets)
        
    } catch (error) {
        res.status(404).send({error: error.message})   
    }
};

module.exports = {getDietsHandler}