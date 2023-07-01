const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User',
    {
      /* id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      }, */
      email: { 
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Debe proporcionar una dirección de correo electrónico válida",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
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