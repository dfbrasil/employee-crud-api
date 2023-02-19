/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsável pelas 'connectionsStrings' (PostgresSQL)
 * data: 16/02/2023
 * autor: Daniel Brasil
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// => definindo as rotas do CRUD = 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

module.exports = router;