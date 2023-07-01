const { User } = require("../../db");

const getUserByEmailController = async (email) => {
  const userByEmail = await User.findByPk(email);
  return userByEmail;
};

module.exports = { getUserByEmailController };
