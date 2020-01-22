const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeetracker",
    port: 3306
});
connection.connect(function (err) {
    if (err) throw err;
});
let mainMenu = function () {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Employee Tracker', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'main_menu',
                message: 'What would you like to do?',
                choices: [
                    'View all Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee'
                ],
            },
        ])
        .then(function (answer) {
            console.info('Answer: ', answer.main_menu);
            switch (answer.main_menu) {
                case 'View all Departments':
                    viewDeptartments();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
            }
        })
}
mainMenu();
function viewDeptartments() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Departments', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    return new Promise(function (reject) {
        const queryString = "SELECT * FROM department";
        connection.query(queryString, function (err, result) {
            if (err) {
                return reject(err);
            }
            console.table(result);
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });

    });

}
function viewRoles() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Roles', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    return new Promise(function (reject) {
        const queryString = "SELECT * FROM role";
        connection.query(queryString, function (err, result) {
            if (err) {
                return reject(err);
            }
            console.table(result);
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });
    });
}
function viewEmployees() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Employees', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    return new Promise(function ( reject) {
        const queryString = "SELECT * FROM employee";
        connection.query(queryString, function (err, result) {
            if (err) {
                return reject(err);
            }
            console.table(result);
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });
    });
}
function addDepartment() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Departments', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    inquirer
        .prompt(
            {
                type: 'input',
                name: 'departmentName',
                message: 'What department would you like to add?',
            })
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?", { name: answer.departmentName },
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            ),
                console.table(answer);
                clear();
                console.log(
                    chalk.yellow(
                        figlet.textSync('Employee Tracker', { horizontalLayout: 'full', font: 'Graffiti' })
                    ));
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });

}
function addRole() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Roles', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'addTitle',
                message: 'What title would you like to add?',
            },
            {
                type: 'input',
                name: 'addSalary',
                message: 'What salary would you like to add?',
            },
            {
                type: 'input',
                name: 'addDepartmentId',
                message: 'What Department ID would you like to add?',
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.addTitle,
                    salary: answer.addSalary,
                    department_id: answer.addDepartmentId
                },
                function (err,) {
                    if (err) {
                        throw err;
                    }
                }
            ),
                console.table(answer);
                clear();
                console.log(
                    chalk.yellow(
                        figlet.textSync('Employee Tracker', { horizontalLayout: 'full', font: 'Graffiti' })
                    ));
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });

}
function addEmployee() {
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Employees', { horizontalLayout: 'full', font: 'Graffiti' })
        ));
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'addFirstName',
                message: 'What first name would you like to add?',
            },
            {
                type: 'input',
                name: 'addLastName',
                message: 'What last name would you like to add?',
            },
            {
                type: 'input',
                name: 'addRoleId',
                message: 'What role ID would you like to add?',
            },
            {
                type: 'input',
                name: 'addManagerId',
                message: 'What manager ID would you like to add?',
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee SET ?",
                {
                    first_name: answer.addFirstName,
                    last_name: answer.addLastName,
                    role_id: answer.addRoleId,
                    manager_id: answer.addManagerId
                },
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            ),
                console.table(answer);
                clear();
                console.log(
                    chalk.yellow(
                        figlet.textSync('Employee Tracker', { horizontalLayout: 'full', font: 'Graffiti' })
                    ));
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'main_menu',
                        message: 'What would you like to do?',
                        choices: [
                            'View all Departments',
                            'View All Roles',
                            'View All Employees',
                            'Add Department',
                            'Add Role',
                            'Add Employee'
                        ],
                    },
                ])
                .then(function (answer) {
                    console.info('Answer: ', answer.main_menu);
                    switch (answer.main_menu) {
                        case 'View all Departments':
                            viewDeptartments();
                            break;
                        case "View All Roles":
                            viewRoles();
                            break;
                        case "View All Employees":
                            viewEmployees();
                            break;
                        case "Add Department":
                            addDepartment();
                            break;
                        case "Add Role":
                            addRole();
                            break;
                        case "Add Employee":
                            addEmployee();
                            break;
                    }
                })
        });

}











