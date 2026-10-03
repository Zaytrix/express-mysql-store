const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'store',
});

connection.connect((err) => {
  if (err) {
    console.error('MySql is Not Connected ❌ ' + err.message);
    return;
  }
  console.log('MySql is Connected ✔');
});


module.exports = connection;