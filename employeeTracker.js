const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const mySQL = require("sync-mysql");

const connection2 = new mySQL({
    host: "localhost",
    port: 3306,
    user: "root",   
    password: "root",
    database: "employeeTracker_db",
});

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
                "View all employees by role",
                "View all departments",
                "View all roles",
                "Add Department",
                "Add Role",
                "Add employee",
                "Update employee role",
                // "Remove employee",
                // "Update employee manager",
                "Quit"
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

            case "View all employees by role":
                viewEmployeesByRole();
                break;
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Update employee role":
                updateEmployee();
                break;

            case "Remove employee":
                removeEmployee();
                break;

            case "Update employee manager":
                updateEmployeeManager();
                break;

            case "Quit":
                console.log("Goodbye!");
                connection.end();
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
            console.table(res);
            start();
        });
    };

async function departmentSearch () {
    var departments = await getDepartments();
    inquirer
        .prompt({
            type: "list",
            name: "input",
            message: "Please choose a department you would like to view?",
            choices: departments
        })
        .then((answer) => {
        const query = "SELECT employee.id,employee.first_name,employee.last_name, role.title,department.id as department_id, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id =department.id HAVING ?";
        
        connection.query(query, { department_id: answer.input }, (err, res) => {
            console.table(res);
            start();
        });
        });
    };

async function managerSearch () {
    var managers = await getManager();   
    inquirer
            .prompt({
                type: "list",
                name: "input",
                message: "Please select the manager?",
                choices:managers
            })
            .then((answer) => {
            const query = "SELECT employee.id as id,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager, manager.id as managerid from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id =department.id HAVING ?";
            connection.query(query, { managerid: answer.input }, (err, res) => {


            var employees=[];
            res.forEach(({ id, first_name, last_name, title, departmentname, salary, manager }) => {
            employees.push({id:id,first_name:first_name, last_name:last_name,department:departmentname, title:title, salary:salary, manager:manager});
           
            });
            console.table(employees); 

               // console.table(res);
                start();
            });
            });
    };

    async function viewRoles () {
        var roles = await getRoles();
        var roleTable=[];
        roles.forEach(({ name, value }) => {
            roleTable.push({id:value,title:name});
           
          });
       
        console.table(roleTable); 
        start(); 
    }
    async function viewDepartments () {
        var departments = await getDepartments();
        var departmentsTable=[];
        departments.forEach(({ name, value }) => {
            departmentsTable.push({id:value,title:name});
           
          });
        console.table(departmentsTable); 
        start(); 
    }

    async function viewEmployeesByRole () {
    var roles = await getRoles();
   
    inquirer
            .prompt({
                type: "list",
                name: "input",
                message: "Which Role would you like to view?",
                choices: roles
            })
            .then((answer) => {
            const query = "SELECT employee.id as employeeid,employee.first_name,employee.last_name, role.title, department.name as departmentname, salary, concat(manager.first_name,' ',manager.last_name) as manager, role.id as roleid from employee left outer join employee as manager on employee.manager_id=manager.id inner join role on employee.role_id=role.id inner join department on role.department_id =department.id HAVING ?";
            connection.query(query, { roleid: answer.input }, (err, res) => {
                console.table(res);
                start();
            });
            });
    };

    

 async function getDepartments() {
    const query = 
        "SELECT id, name FROM department";
        var departmentArray = [];

        var results = connection2.query(query);
        
        for(var i=0;i<results.length;i++)
        {
            departmentArray.push({name:results[i].name,value:results[i].id});
        }
        return departmentArray;      
    };

async function getRoles() {
    const query = 
        "SELECT id, title FROM role";
        var roleArray = [];

        var results = connection2.query(query);
        
        for(var i=0;i<results.length;i++)
        {
            roleArray.push({name:results[i].title,value:results[i].id});
        }
        return roleArray;      
    };

async function getManager() {
    const query = 
    "SELECT id, concat(first_name,' ',last_name) as manager FROM employee";
    var managerArray = [];

    var results = connection2.query(query);
    for (var i=0; i < results.length; i++) {
        managerArray.push( {name:results[i].manager,value:results[i].id})
    }
    return managerArray;

};

const addDepartment = () => {
    inquirer
        .prompt({
        name: 'newDepartment',
        type: "input",
        message: "What is the name of the department you want to add?"
        })
        .then((answer) => {
        connection.query(
            'INSERT INTO department SET ?', {
            name: answer.newDepartment
            }, (err, res) => {
                if (err) {
                    if (err.errno == 1062){
                        console.log("The Department you entered already exists");
                        start();
                        return;
                    }
                    else{
                        throw err;
                    }
                }
                console.log("New Department has been added");
                start();
            }
        );
        });
    };

    async function addRole  ()  {
        var departments = await getDepartments();
       
        inquirer
            .prompt([{
            name: 'newTitle',
            type: "input",
            message: "What is the title you would like to add?"
            },
    
            {
            name: 'newSalary',
            type: "input",
            message: "What is the salary?"
            },
    
            {
            name: 'newDepartment',
            type: "list",
            message: "What is the department that the role belongs to?",
            choices: departments
            }
        
        ])
            .then((answer) => {
               
                    connection.query(
                        'INSERT INTO role SET ?', {
                        title: answer.newTitle,
                        salary: answer.newSalary,
                        department_id: answer.newDepartment,
                        }, (err, res) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                            console.log("New Role has been added");
                        }
                    );
                start();
            });
        };

async function addEmployee  ()  {
    var roles = await getRoles();
    var managers = await getManager();
    managers.push( {name:"None",value:-1} );
    inquirer
        .prompt([{
        name: 'newEmployeeFirstName',
        type: "input",
        message: "What is the employee's first name?"
        },

        {
        name: 'newEmployeeLastName',
        type: "input",
        message: "What is the employee's last name?"
        },

        {
        name: 'newEmployeeRole',
        type: "list",
        message: "What is the employee's title?",
        choices: roles
        },

        {
        name: 'newEmployeeManager',
        type: "list",
        message: "Who is the employee's manager?",
        choices: managers
        }
    
    ])
        .then((answer) => {
            if(answer.newEmployeeManager==-1)
            {
                connection.query(
                    'INSERT INTO employee SET ?', {
                    first_name: answer.newEmployeeFirstName,
                    last_name: answer.newEmployeeLastName,
                    role_id: answer.newEmployeeRole,
                    }, (err, res) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        console.log("Please try again!");
                    }
                );
            }
            else{
                connection.query(
                    'INSERT INTO employee SET ?', {
                    first_name: answer.newEmployeeFirstName,
                    last_name: answer.newEmployeeLastName,
                    role_id: answer.newEmployeeRole,
                    manager_id: answer.newEmployeeManager
                    }, (err, res) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        console.log("New Employee has been added ...\n");
                    }
                );
            }
            start();
       
        });
    };

async function updateEmployee  ()  {
    var roles = await getRoles();
    var employees = await getManager();
    
    inquirer
        .prompt([
            {
                name: 'updateEmployee',
                type: "list",
                message: "Which employee would you like to update their role?",
                choices: employees
                },

            
        {
        name: 'newEmployeeRole',
        type: "list",
        message: "What is the employee's role?",
        choices: roles
        },

        
    
    ])
        .then((answer) => {


            const query = connection.query(
                'UPDATE employee SET ? WHERE ?',
                [
                    {
                    role_id: answer.newEmployeeRole,
                    },
                    {
                    id: answer.updateEmployee,
                    },
                ],
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} employees updated!\n`);
                    
                }
                );

            
            start();
        
        });
    };

    


