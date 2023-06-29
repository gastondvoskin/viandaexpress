const { getUserByNameController } = require('../controllers/userControllers/getUserByNameController');
const { getAllUsersController } = require('../controllers/userControllers/getAllUsersController');
const { postUserController } = require('../controllers/userControllers/postUserController');
const { putUserController } = require('../controllers/userControllers/putUserController');
const { deleteUserController } = require('../controllers/userControllers/deleteUserController');


const getUserHandler = async (req, res) => {

    const { name } = req.query;
    try {
        if (name) {
            const userByName = await getUserByNameController(name);
            res.status(200).send(userByName);
        } else {
            const allUsers = await getAllUsersController();
            res.status(200).send(allUsers);
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const postUserHandler = async (req, res) => {
    const { name, email, type, status, adress } = req.body;
    console.log(req.body)
    try {
        if (name && email && type && status && adress) {

            const newUser = await postUserController(name, email, type, status, adress);
            res.status(201).send(newUser);
        } else {
            throw new Error('Falta información en el cuerpo de la solicitud');
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


const putUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name /* add attributes from User model */ } = req.body;
        await putUserController(id, name /* add attributes from User model */);
        res.status(200).send('Modificación exitosa');
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUserController(id);
        res.status(200).send("Se eliminó con éxito");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};



module.exports = { getUserHandler, postUserHandler, putUserHandler, deleteUserHandler };