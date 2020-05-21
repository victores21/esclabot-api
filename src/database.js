const mysql = require("mysql");
const config = require("../configuration/config");

const mysqlConnection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error", err);
    return;
  } else {
    console.log("Database connected");
    return;
  }
});

module.exports = mysqlConnection;
