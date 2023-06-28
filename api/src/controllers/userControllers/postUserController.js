const { User } = require('../../db');


const postUserController = async (name /* add attributes from User model */) => {
  const newUser = await User.create({ name /* add attributes from User model */ });
  return newUser.dataValues;    /* check this line */
};


module.exports = { postUserController };
