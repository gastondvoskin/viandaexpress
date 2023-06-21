const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {timestamps: false}
  );
};