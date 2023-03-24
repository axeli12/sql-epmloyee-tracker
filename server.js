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
                break
            case 'Exit':
                db.end();
                break;

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

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the new hire first name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the new hire last name'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role of the new hire',
            choices: [
                {
                    name: 'Lead Sales',
                    value: 1
                },
                {
                    name: 'Lead Engineer',
                    value: 2
                },
                {
                    name: 'JR Engineer',
                    value: 3
                },
                {
                    name: 'Paralegal',
                    value: 4
                },
                {
                    name: 'Head Lawyer',
                    value: 5
                },
                {
                    name: 'jr Accountant',
                    value: 6
                },
                {
                    name: 'Accountant',
                    value: 7
                },
                {
                    name: 'Lead accountant',
                    value: 8
                },
                {
                    name: 'Lead Hr',
                    value: 9
                },
                {
                    name: 'Assistant',
                    value: 10
                }
            ]
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'What is the new hires manger id',
            choices: [
                {
                    name: 'Mark Smith',
                    value: 1 
                },
                {
                    name: 'Jane Stan',
                    value: 2
                },
                {
                    name: 'Tim Star',
                    value: 3
                },
                {
                    name: 'Rachel Zane',
                    value: 4
                },
                {
                    name: 'Joahn Till',
                    value: 5
                },
                {
                    name: 'Mike Smith',
                    value: 6
                },
                {
                    name: 'Mike Bron',
                    value: 7
                },
                {
                    name: 'John Bo',
                    value: 8
                },
                {
                    name: 'Carly Shea',
                    value: 9
                },
                {
                    name: 'Tom Smith',
                    value: 10
                },
            
                
            ]
        },
    ])
    .then( answers => {
        let ql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${answers.first_name}', '${answers.last_name}', '${answers.role_id}', '${answers.manager_id}')`;
        db.query(ql, (err, results) => {
            if (err) throw err;
            console.table(results)
            newStart(); 
        });
    })
}