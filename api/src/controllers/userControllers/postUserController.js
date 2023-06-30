const e = require('express');
const { User } = require('../../db');
const sendEmailWelcome = require("../../nodemailer/sendEmail");


const postUserController = async (name, email, type, status, adress) => {
  const userByEmail = await User.findAll({
    where: { email: email },
  });
  if (userByEmail.length) {
    throw new Error(`El correo electrónico ${email} pertenece a un usuario que ya está registrado.`)
  };
  const newUser = await User.create({ name, email, type, status, adress });

  if (newUser.dataValues) {
    await sendEmailWelcome(email)
  };
  return newUser.dataValues;
};


module.exports = { postUserController };
