const mysql = require('mysql2');
const cTable = require('console.table');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'monstersinc'
    }
);


// QUERIES
// 0 View All Departments
function viewDepartments() {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table('Departments', rows));
    });
};

// 1 View All Roles
function viewRoles() {
    db.query(`SELECT roles.id, roles.title, departments.name AS department_name, roles.salary
            FROM roles
            INNER JOIN departments
            ON roles.department_id = departments.id;`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table('Roles', rows);
    });
};

// 2 View All Employees
function viewEmployees() {
    db.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role_title, departments.name AS department_name, roles.salary, employees.manager_id
            FROM employees
            INNER JOIN roles
            ON employees.role_id = roles.id
            INNER JOIN departments
            ON roles.department_id = departments.id;`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table('Employees', rows);
    });
};




// create a department
function createDepartment() {
    const sql = `INSERT INTO departments (id, name)
                VALUES (?, ?)`;
    //const params = [data here];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};


// delete a department
function deleteDepartment() {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};





module.exports = { viewDepartments, viewRoles, viewEmployees };