const { postFavoriteController } = require("../controllers/favoriteControllers/postFavoriteController.js");

const postFavoriteHandler = async (req, res) => {
    try {
        const { email, foodId } = req.body;
        if(email && foodId) {
            const newFavorite = await postFavoriteController(email, foodId);
            res.status(201).send('Favorito agregado');
        } else {
            throw new Error('Falta información en el body de la request');
        }
        
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

module.exports = { postFavoriteHandler };