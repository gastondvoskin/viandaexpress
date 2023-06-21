const getFoodHandler = (req,res) => {
    res.status(200).send('Deberia traer todas las viandas handle')
}

const postFoodHandler = (req,res) => {
    res.status(200).send('Deberia crear una nueva vianda')
}

const putFoodHandler = (req,res) =>{
    res.status(200).send('Deberia modificar una vianda')
}

module.exports = {getFoodHandler,postFoodHandler,putFoodHandler}