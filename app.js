// MODULES
const inquirer = require('inquirer');

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
    promptData();
};

function promptData() {
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
                name: 'Create an Employee Role.',
                value: 6
            }]
        }])
    //.then
};

initializeApp();