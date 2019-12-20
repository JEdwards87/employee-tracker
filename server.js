const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table')


//connect to mysql
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeetracker',
    port: '3308'
});

function userQuery() {
    con.connect((err) => {
        if (err) throw err;
    });

    //Title Zone
    clear();
    console.log(
        chalk.yellow(
            figlet.textSync('Employee Tracker', { horizontalLayout: 'full', font: 'invita' })
        )
    );

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'main_menu',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role'
                ],
            },
        ])
        .then(answers => {
            console.info('Answer:', answers.main_menu);
            if (answers.main_menu === 'View All Departments') {
                viewDeptartments();
            }
            else if (answers.main_menu === 'View All Roles') {
                viewRoles();
            }
            else if (answers.main_menu === 'View All Employees') {
                viewEmployees();
            }
            else if (answers.main_menu === 'Add Department') {
                addDepartment();
            }
            else if (answers.main_menu === 'Add Role') {
                addRole();
            }
        });
    };
userQuery();

function viewDeptartments() {
    con.query('SELECT * FROM department', function (err, result) {
        console.table(result);
    });
};

function viewEmployees() {
    con.query('SELECT * FROM employee', function (err, result) {
        console.table(result);
        return;
    });
};

function viewRoles() {
    con.query('SELECT * FROM role', function (err, result) {
        console.table(result);
        return;
    });
};

function addDepartment() {
    inquirer
    .prompt(
        {
            type: 'input',
            name: 'addDept',
            message: 'Enter Department Name:'
            
        } 
    ).then (function(answers){

        con.query("INSERT INTO `department` (name) VALUES ('"+ answers.addDept +"')", function (answers, err){
            console.log(answers);
            // if (err) throw err;
            
    })

})

}

function addRole() {
    inquirer
    .prompt(
        {
            type: 'input',
            name: 'addTitle',
            message: 'Enter Title:'
        , 
        
            type: 'input',
            name: 'addSalary',
            message: 'Enter Salary:'
        ,
        
            type: 'input',
            name: 'addDepartment_Id',
            message: 'Enter Salary:'
        }  
    ).then (function(answers){

        con.query("INSERT INTO `role` (title, salary, department_id) VALUES ('"+ answers.addTitle +"', '"+ answers.addSalary +"', '"+ answers.addDepartment_Id +"')", function (answers, err){  //AyDy helped me with th '"+something+"'
            console.log(answers);
            // if (err) throw err;
            
    })

})

}


