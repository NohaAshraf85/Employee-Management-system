# Employee Management System
## Descriotion
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

The list of questions are designed to help the user chose from a list of questions what they wish to accomplish, the first promt shall provide the user with the option to chose what is the action they want to perform first, as illustrated below




