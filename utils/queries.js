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
            return (console.log(err));
        }
        return (console.table('Roles', rows));
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
            return (console.log(err));
        }
        return (console.table('Employees', rows));
    });
};

// 3 Add a Department
function addDepartment(departmentAnswers) {
    const sql = `INSERT INTO departments (id, name)
                VALUES (?, ?)`;
    const params = [departmentAnswers.id, departmentAnswers.name];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};

// 4 Add a Role
function addRole(roleAnswers) {
    const sql = `INSERT INTO roles (id, title, salary, department_id)
                VALUES (?, ?, ?, ?)`;
    const params = [roleAnswers.id, roleAnswers.title, roleAnswers.salary, roleAnswers.department_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};

// 5 Add an Employee
function addEmployee(employeeAnswers) {
    const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?, ?)`;
    const params = [employeeAnswers.id, employeeAnswers.first_name, employeeAnswers.last_name, employeeAnswers.role_id, employeeAnswers.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};

// 6 Update Employee Role
function updateEmployeeRole() {
    return (console.log("TO DO"));
};

// 7 Delete Department
function deleteDepartment(delDepartmentAnswer) {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [delDepartmentAnswer.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};

// 8 Delete Role
function deleteRole(delRoleAnswer) {
    const sql = `DELETE FROM roles WHERE id = ?`;
    const params = [delRoleAnswer.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};

// 9 Delete Employee
function deleteEmployee(delEmployeeAnswer) {
    const sql = `DELETE FROM roles WHERE id = ?`;
    const params = [delEmployeeAnswer.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            return (console.log(err));
        }
        return (console.table(result));
    });
};



module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, deleteDepartment, deleteRole, deleteEmployee };