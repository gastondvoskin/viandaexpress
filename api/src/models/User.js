const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Debe proporcionar una dirección de correo electrónico válida",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "guest",
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      adress: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};