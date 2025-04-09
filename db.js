const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your actual MySQL password
  database: 'user_data',
});

module.exports = db;
