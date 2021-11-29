// MODULES
const inquirer = require('inquirer');
const viewDepartments = require('./utils/queries');

function initializeApp() {
    console.log(
        `
                                ────▐██████────██████▌
                                ────████████──████████
                                ───▐██████████████████▌
                                ───████████▀▀▀▀████████
                                ──▐█████▀──▄██▄──▀█████▌
                                ──█████───▐████▌───█████
                                ─▐██████▄──▀██▀──▄██████▌
                                ─██████████▄▄▄▄██████████
                                ▐███████─▐██████▌─███████▌
                                ███████▌──▐████▌──▐███████
        
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
                name: 'View Employees by Department.',
                value: 3
            },
            {
                name: 'View Employees by Manager.',
                value: 4
            },
            {
                name: 'Update Employee Manager.',
                value: 5
            },
            {
                name: 'Add a Department.',
                value: 6
            },
            {
                name: 'Add a Role.',
                value: 7
            },
            {
                name: 'Add an Employee.',
                value: 8
            },
            {
                name: 'Update an Employee Role.',
                value: 9
            },
            {
                name: 'Delete a Department.',
                value: 10
            },
            {
                name: 'Delete a Role.',
                value: 11
            },
            {
                name: 'Delete an Employee.',
                value: 12
            },
            {
                name: 'View Total Utilized Budget.',
                value: 13
            }]
        }])
        .then(answers => {
            if (answers.menu === 0) {
                viewDepartments();
                confirmNew();
            }
        })
    //.then(confirmNew)
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