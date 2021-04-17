# Employee Management System
## Description
The Employee Management System is a Command Line Application (CLI), that provides the user with the ability to add and update the information that are related to the employee in a company.

## Table of Contents

[Description](#description)

[Technologies-&-tools-used](#Technologies-&-tools-used)

[Installation](#Installation)

[Usage](#usage)

[How-it-Works](#How-it-Works)

[License](#License)

[Badges](#Badges)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Technologies & tools used
1. JavaScript
2. Node.js
3. MySQL Workbench
4. MySQL npm package
5. InquierrJs
6. console.table

## Installation
To install the application follow the following steps:
1. Clone the repo on your local machine
2. Install the [inquirer package](https://www.npmjs.com/package/inquirer) to prompt the list of questions through `npm install inquirer` command
3. Install the [mysql package](https://www.npmjs.com/package/mysql) through `npm install mysql` command
4. Install the [console.table package](https://www.npmjs.com/package/console.table) through `npm install console.table` command
Install the [sync-mysql package](https://www.npmjs.com/package/sync-mysql) through the command `npm install sync-mysql` command

## Usage
This Employee Management System is designed as a CLI application to make it easy for none developers to interact with information stored in an employee database and be able to add or update team member's information in an organization. This information includes but not limited to, employees names, salary, role, managers, which department they belong to.

## How It Works
Upon opening Visual Studio Code (VSC), right click on the `<employeeTracker.js>` file and open it in the Integrated Terminal in VSC, the applicaiton is invoked through typing the command `Node employeeTracker.js` in the Integrated Terminal

Within the Integrated Terminal a list of questions prompted through the usage of the inquirer package.

The list of questions are designed to help the user chose from a list of questions what they wish to accomplish.

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

### View all employees
In the first option the system provides is to View all employees in the system, this option provides the user with a table that lists all the information in the database using JOINTS as illustrated below.

![Demo](./assets/viewAllEmployees.gif)

### View all employees by department
In the second option the system provides is to View all employees by department, this option prompts the user to answer another question that provides a choice for the department the user wished to view the employees that belong to it. 

![Demo](./assets/viewAllEmployeesByDepartment.gif)

### View all employees by manager
In the third option the system provides is to View all employees by manager, this option prompts the user to chose froma list which manager the user wished to view the employees that belong to him/her.

![Demo](./assets/viewEmployeesByManager.gif)

### View all employees by role
In the fourth option the system provides is to View all employees by role, this option prompts the user to chose froma list which role the user wished to view .

![Demo](./assets/viewAllEmployeesByRole.gif)


## License
![APM](https://img.shields.io/apm/l/README)

## Badges

![javaScript](https://img.shields.io/badge/JavaScript-100%25-blue)
![Node](https://img.shields.io/badge/Node.js-CLI-blue)
![MySQL](https://img.shields.io/badge/MySQL-npm%20package-blue)
![inquirer](https://img.shields.io/badge/inquirer-package-blue)

## Contributing 

To contribute to this project, please make sure you follow the guidelines in [The Contributor Covenant](https://www.contributor-covenant.org/) as general guidelines.
Kindly maintain the highest ethics and respect. For further questions or requests kindly contact me through my [Email](mailto:noha_ashraf85@hotmail.com) or [GitHub](https://github.com/NohaAshraf85).

## Tests 
The Employee Management System's database has been tested using MySQL Workbench.

## Questions
For any questions, please contact me through [GitHub](https://github.com/NohaAshraf85) 
or [Email](mailto:noha_ashraf85@hotmail.com)




