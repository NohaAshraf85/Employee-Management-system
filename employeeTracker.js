const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeeTracker_db",
});

const start = () => {
    inquirer
        .promt({
            
        })
}

connection.connect((err) => {
    if (err) throw err;
    start();
})