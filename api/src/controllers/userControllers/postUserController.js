const { User } = require('../../db');


const postUserController = async (name, email, type, status, adress) => {
  const newUser = await User.create({ name, email, type, status, adress });
  return newUser.dataValues;    /* check this line */
};


module.exports = { postUserController };
