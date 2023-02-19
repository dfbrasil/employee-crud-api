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

// ==> Rota responsável por listar todos os 'Colaboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determinado 'Colaborador' por Id: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById)

// ==> Rota reponsável por atualizar um determinado 'Colaborador(a) por Id: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById)

// ==> Rota responsável por deletar/excluir um determinado 'Colaborador(a) por Id: localhost:3000/api/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;