const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Detail', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {timestamps: false}
  );
};