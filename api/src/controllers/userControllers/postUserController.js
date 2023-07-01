const e = require("express");
const { User } = require("../../db");
const sendEmailWelcome = require("../../nodemailer/sendEmail");

const postUserController = async (name, email, type, status, adress) => {
  const userByEmail = await User.findAll({
    where: { email: email },
  });
  if (!userByEmail.length) {
    const newUser = await User.create({ name, email, type, status, adress });
    await sendEmailWelcome(email);

    return newUser.dataValues;
  }
  return;
};

module.exports = { postUserController };
