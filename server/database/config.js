const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysqlcluster2.registeredsite.com',
  user: 'hohohadmin',
  password: '!Qaz2wsx3edc',
  database: 'hohohoh',
});

connection.connect();

module.exports = connection;
