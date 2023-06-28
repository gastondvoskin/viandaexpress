const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Order', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bill: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pickup_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    
  );
};