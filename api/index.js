const app = require('./src/app.js');
const { sequelize } = require('./src/db.js');
require('dotenv').config();

const PORT = process.env.PORT;  /* 3001 */


// { force: true } don't modify until each member of the group has updated its db with the following requests in Insomina, Postman or other:  
// GET localhost:3001/api
// GET localhost:3001/food    (by now it is still food in singular. it will change to foods)
// GET localhost:3001/diets

sequelize.sync({ force: true }).then(() => {    /* force: true to update db Food id Datatype from integer to UUID */
  console.log('Connected to DB');
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
  });
});

