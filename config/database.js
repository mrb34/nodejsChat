const dotenv = require('dotenv');
module.exports={
  database:process.env.DB_STRING,
  secret:process.env.SECRET_KEY
};
