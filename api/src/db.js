require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserFunction = require("./models/User.js"); 
const ReviewFunction = require("./models/Review.js");
const FoodFunction = require("./models/Food.js"); 
const DetailFunction = require("./models/Detail.js");
const OrderFunction=require("./models/Order.js")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
    {logging: false}
);

UserFunction(sequelize);
ReviewFunction(sequelize);
FoodFunction(sequelize);
DetailFunction(sequelize);
OrderFunction(sequelize);

// ASSOCIATIONS
const { User, Review, Food,  Detail, Order } = sequelize.models; 
User.hasMany(Review);
Review.belongsTo(User);

Food.hasMany(Review);
Review.belongsTo(Food);


User.belongsToMany(Food, {through: "Favorite"});
Food.belongsToMany(User, {through: "Favorite"});


User.hasMany(Order,{foreignKey:'user_id'});
Order.belongsTo(User);

Order.hasMany(Detail,{foreignKey:'order_id'});
Detail.belongsTo(Order);

Food.hasMany(Detail,{foreignKey:'food_id'});
Detail.belongsTo(Food);

// EXPORTS
module.exports = {
  sequelize, 
  ...sequelize.models
};

