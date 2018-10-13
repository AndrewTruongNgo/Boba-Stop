const mysql = require('mysql');
require('dotenv').config({path: __dirname + '/../.env'});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.log('ERROR database connection failed', error)
  } else {
    console.log('Database connection successful!')
  }
});
