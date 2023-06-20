const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Review', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {timestamps: false}
  );
};