const { User } = require("../../db");
const { Op } = require("sequelize");

const getUserByEmailController = async (email) => {
  const userByEmail = await User.findAll({
    where: { email: { [Op.iLike]: `%${email}%` } },
  });

  return userByEmail;
};

module.exports = { getUserByEmailController };
