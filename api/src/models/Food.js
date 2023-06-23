const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Food',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        isURL: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initial_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      final_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      total_score: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      }

    },
    { timestamps: false }
  );
};



