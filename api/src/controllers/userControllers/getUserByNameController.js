const { User } = require("../../db");
const { Op } = require("sequelize");

const getUserByNameController = async (name) => {
  const userByname = await User.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  return userByname;
};

module.exports = { getUserByNameController };
