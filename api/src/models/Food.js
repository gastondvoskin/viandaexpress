const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Food', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {timestamps: false}
  );
};



