const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require("inquirer");
const express = require('express');
const mysql = require("mysql");
const app = express();
const ctable = require('console.table')

app.set('port', process.env.PORT || 3308);

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
        console.log('Connected!');
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
                    'View All Employees'
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



