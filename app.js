// MODULES
const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, deleteDepartment, deleteRole, deleteEmployee } = require('./utils/queries');

function initializeApp() {
    console.log(
        `
                                    ▐██████    ██████▌
                                    ████████  ████████
                                   ▐██████████████████▌
                                   ████████▀▀▀▀████████
                                  ▐█████▀  ▄██▄  ▀█████▌
                                  █████   ▐████▌   █████
                                 ▐██████▄  ▀██▀  ▄██████▌
                                 ██████████▄▄▄▄██████████
                                ▐███████ ▐██████▌ ███████▌
                                ███████▌  ▐████▌  ▐███████
        
███    ███  ██████  ███    ██ ███████ ████████ ███████ ██████  ███████     ██ ███    ██  ██████    
████  ████ ██    ██ ████   ██ ██         ██    ██      ██   ██ ██          ██ ████   ██ ██         
██ ████ ██ ██    ██ ██ ██  ██ ███████    ██    █████   ██████  ███████     ██ ██ ██  ██ ██         
██  ██  ██ ██    ██ ██  ██ ██      ██    ██    ██      ██   ██      ██     ██ ██  ██ ██ ██         
██      ██  ██████  ██   ████ ███████    ██    ███████ ██   ██ ███████     ██ ██   ████  ██████ ██
         _____                                   _      _____         _             
        |     |___ ___ ___ ___ ___ _____ ___ ___| |_   |   __|_ _ ___| |_ ___ _____ 
        | | | | .'|   | .'| . | -_|     | -_|   |  _|  |__   | | |_ -|  _| -_|     |
        |_|_|_|__,|_|_|__,|_  |___|_|_|_|___|_|_|_|    |_____|_  |___|_| |___|_|_|_|
                          |___|                              |___|                  
`);
    promptMenu();
};

function promptMenu() {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'menu',
            message: 'Please select an option:',
            choices: [{
                name: 'View all Departments.',
                value: 0
            },
            {
                name: 'View all Roles.',
                value: 1
            },
            {
                name: 'View all Employees.',
                value: 2
            },
            {
                name: 'Add a Department.',
                value: 3
            },
            {
                name: 'Add a Role.',
                value: 4
            },
            {
                name: 'Add an Employee.',
                value: 5
            },
            {
                name: 'Update an Employee Role.',
                value: 6
            },
            {
                name: 'Delete a Department.',
                value: 7
            },
            {
                name: 'Delete a Role.',
                value: 8
            },
            {
                name: 'Delete an Employee.',
                value: 9
            },
            {
                name: 'View Total Utilized Budget.',
                value: 10
            }]
        }])
        .then(answers => {
            // view departments
            if (answers.menu === 0) {
                viewDepartments();
                confirmNew();
            }
            // view roles
            if (answers.menu === 1) {
                viewRoles();
                confirmNew();
            }
            // view employees
            if (answers.menu === 2) {
                viewEmployees();
                confirmNew();
            }
            // add department
            if (answers.menu === 3) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Department id number.'
                    },
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Please enter the Department name.'
                    }])
                    .then(departmentAnswers => {
                        return addDepartment(departmentAnswers);
                    })
                    .then(confirmNew);
            }
            // add role
            if (answers.menu === 4) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Role id number.'
                    },
                    {
                        type: 'input',
                        name: 'title',
                        message: 'Please enter the Role title.'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Please enter the salary for the Role.'
                    },
                    {
                        type: 'input',
                        name: 'department_id',
                        message: 'Please enter the Department id number the Role belongs to.'
                    }])
                    .then(roleAnswers => {
                        return addRole(roleAnswers);
                    })
                    .then(confirmNew);
            }
            // add employee
            if (answers.menu === 5) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Employees id number.'
                    },
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'Please enter the Employees first name.'
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'Please enter the Employees last name.'
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'Please enter the Employees Role id number.'
                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'Please enter the Employees Manager id number.'
                    }])
                    .then(employeeAnswers => {
                        return addEmployee(employeeAnswers);
                    })
                    .then(confirmNew);
            }
            // update employee role
            if (answers.menu === 6) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Employees id number.'
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'Please enter the Employees new Role id number.'
                    }])
                    .then(updateEmployeeAnswer => {
                        return updateEmployeeRole(updateEmployeeAnswer);
                    })
                    .then(confirmNew);
            }
            // delete a department
            if (answers.menu === 7) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Department id number.'
                    }])
                    .then(delDepartmentAnswer => {
                        return deleteDepartment(delDepartmentAnswer);
                    })
                    .then(confirmNew);
            }
            // delete a role
            if (answers.menu === 8) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Role id number.'
                    }])
                    .then(delRoleAnswer => {
                        return deleteRole(delRoleAnswer);
                    })
                    .then(confirmNew);
            }
            // delete an employee
            if (answers.menu === 9) {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'id',
                        message: 'Please enter the Employees id number.'
                    }])
                    .then(delEmployeeAnswer => {
                        return deleteEmployee(delEmployeeAnswer);
                    })
                    .then(confirmNew);
            }
        })
};

function confirmNew() {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'confirm',
            message: 'Would you like to continue?',
            choices: [{
                name: 'Yes.',
                value: 0
            },
            {
                name: 'No.',
                value: 1
            }]
        }])
        .then(answer => {
            if (answer.confirm === 0) {
                promptMenu();
            }
            if (answer.confirm === 1) {
                console.log('Thank you! Remember "We Scare Because We Care!"');
                process.exit();
            }
        })
};

initializeApp();