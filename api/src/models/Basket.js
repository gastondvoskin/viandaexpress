const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Basket', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {timestamps: false}
  );
};