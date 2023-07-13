const postFavoriteHandler = /* async */ (req, res) => {
    console.log('holaaaa')
    /* const { userId, foodId } = req.body; */
    try {
        res.status(201).send('holis');
    } catch (error) {
        res.status(400).send({error: error.message});
    }
   /*  try {
        if (userId && foodId) {
            const newFavorite = await postFavoriteController(userId, foodId);
            res.status(201).send('Favorito agregado');
        } else {
            throw new Error('Falta información en el body de la request');
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    } */
};

module.exports = { postFavoriteHandler };