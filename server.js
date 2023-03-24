const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { type } = require('os');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const newStart = () => {
    inquirer
    .prompt([
        {
            name: 'Choice',
            type: 'list',
            message: 'Please Choose One to Contonie next steps',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Remove Employee',

            ]
        }
    ])
    .then((answers) => {
        const { choices } = answers;
        switch(choices) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Remove Employee':
                removeEmployee();
        }
    })
}

const viewAllDepartments = () => {
    const ql = `SELECT * FROM deparments`;
    db.query(ql, (err, results) => {
        if (err) throw err;
        console.table(results)
        newStart();
    });
};

const viewAllRoles = () => {
    const ql = `SELECT  role.id, role.title, role.salary deparments.deparments_name FROM role JOIN deparments ON role.deparments_id = deparment.id ORDER BY role.id ASC`;
    db.query(ql, (err, results) => {
        if (err) throw err;
        console.table(results)
        newStart();
    });

};

const viewAllEmployees = () => {
    const ql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, deparments.name AS deparment, role.salary, employee.manager_id FROM employee JOIN role ON role.id = employee.role_id JOIN deparments on deparments.id = role.deparments_id`;
    db.query(ql, (err, results) => {
        if (err) throw err;
        console.table(results)
        newStart(); 
    });
}