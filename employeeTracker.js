const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",   
    password: "root",
    database: "employeeTracker_db",
});

connection.connect((err) => {
    if (err) throw err;
    start();
});

const start = () => {
    inquirer
        .promt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices:[
                "View all employees",
                "View all employees by department",
                "View all emplotees by manager",
                "Add employee",
                "Remove employee",
                "Update employee role",
                "Update employee manager"
            ]
        })
    .then((answer) => {
        switch (answer.action) {
            case "View all employees":
                employeeSearch();
                break;

            case "View all employees by department":
                departmentSearch();
                break;
                
            case "View all emplotees by manager":
                managerSearch();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Remove employee":
                removeEmployee();
                break;

            case "Update employee role":
                updateEmployee();
                break;

            case "Update employee manager":
                updateEmployeeManager();
                break;

            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    });
};

const employeeSearch = () => {
    inquirer
        .promt({

    })
}

