// Requiring mysql as a dependency for setting up the MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// Connecting to the above MySQL connection
connection.connect(function (err) {
    if (err) {
        console.log(`Connection Error: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID: ${connection.threadID}`);
})

module.exports = connection;