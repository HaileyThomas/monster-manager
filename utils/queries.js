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



// DEPARTMENTS QUERIES
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

// view all departments
function viewDepartments() {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};

// view a single department
function viewSingleDepartment() {
    const sql = `SELECT * FROM departments WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.table(row);
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



// ROLE QUERIES
// view all roles
function viewRoles() {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};



// EMPLOYEE QUERIES
function viewEmployees() {
    db.query(`SELECT * FROM employees`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};