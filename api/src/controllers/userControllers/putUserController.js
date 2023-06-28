const { User } = require('../../db');

const putUserController = async (id, name /* add attributes from User model */) => {
    let userToUpdate = await User.findByPk(id);
    if (userToUpdate) {
        const updatedUser = await User.update(
          { name /* add attributes from User model */},
          {
            where: { id }
          }
        );
        return updatedUser;
    } else {
        throw new Error(`El usuario con id ${id} no existe en la base de datos.`);
    }
  };
  
  

module.exports = { putUserController };