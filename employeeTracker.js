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
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices:[
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
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
                
            case "View all employees by manager":
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
    const query = 
        "SELECT employee.id,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id	=department.id";
        connection.query(query, (err, res) => {
            if (err) throw err;
            // res.forEach(({ id, first_name, last_name, title, department_name, salary, employee_manager }) => {
            //     console.log("This should happen one time");
            //     console.table(res);
            
            // });
            console.table(res);
            start();
        });
    };

const departmentSearch = () => {
    inquirer
        .prompt({
            type: "list",
            name: "input",
            message: "What would you like to do?",
            choices:[
                "Human Resources",
                "Finance",
                "Sales",
                "Marketing",
                "Sales",
                "Legal",
                "Engineering"
            ]
        })
        .then((answer) => {
        const query = "SELECT employee.id,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id =department.id HAVING ?";
        connection.query(query, { departmentname: answer.input }, (err, res) => {
           console.log("Hello");
            console.table(res);
            start();
        });
        });
    };

//     const departmentSearch = () => {
//     const query = 
//     // "SELECT employee.id,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id	=department.id ORDER BY departmentname"; WHERE departmentname ?
//     connection.query(query, (err, res) => {
//         if (err) throw err;
//         res.forEach(({ id, first_name, last_name, title, department_name, salary, employee_manager }) => {
//             console.table(res);
//         });
//         start();

//     });
// };

// const managerSearch = () => {
//     const query = 
//     "SELECT employee.id,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id	=department.id ORDER BY manager";
//     connection.query(query, (err, res) => {
//         if (err) throw err;
//         res.forEach(({ id, first_name, last_name, title, department_name, salary, employee_manager }) => {
//             console.table(res);
//         });
//         start();

//     });
// };
