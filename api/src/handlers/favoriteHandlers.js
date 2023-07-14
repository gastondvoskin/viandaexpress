const { postFavoriteController } = require("../controllers/favoriteControllers/postFavoriteController.js");
const { getFavoritesByEmailController } = require("../controllers/favoriteControllers/getFavoritesByEmailController");

const postFavoriteHandler = async (req, res) => {
    try {
        const { email, foodId } = req.body;
        if(email && foodId) {
            const response = await postFavoriteController(email, foodId);
            res.status(201).send(response);
        } else {
            throw new Error('Falta información en el body de la request');
        } 
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

const getFavoritesByEmailHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const favoritesByEmail = await getFavoritesByEmailController(email);
        res.status(200).send(favoritesByEmail);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

module.exports = { postFavoriteHandler, getFavoritesByEmailHandler };