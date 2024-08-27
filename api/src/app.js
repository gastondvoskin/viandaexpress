const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexRouter.js");

const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

// CORS
const allowedOrigins = ['https://viandaexpress.vercel.app', 'http://localhost:5173', '*'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// MIDDLEWARE TO THE ROUTER
app.use("/", router);

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  /* ?? */
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = app;


// OLD 
// app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); /* https://viandaexpress.vercel.app, http://localhost:5173 */
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });