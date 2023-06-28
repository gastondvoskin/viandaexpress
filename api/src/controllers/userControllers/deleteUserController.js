const { User } = require('../../db');

const deleteUserController = async (id) => {
    const deletedUser = await User.findByPk(id)
    console.log(deletedUser);
    if(!deletedUser) throw Error(`No hay un usuario con el id ${id}`);
    await User.destroy({
        where: { id }
    });
};

module.exports = { deleteUserController };