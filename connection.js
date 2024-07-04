const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
const port = process.env.PORT;

connection.connect((err) => {
  if (!err) {
    console.log(`"Database is connected - API up running at localhost:${port}"`);
  } else {
    console.log(err);
  }
});


module.exports = connection;