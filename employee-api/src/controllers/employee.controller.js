/**
 * arquivo: controllers/employee-routes.js
 * descrição: arquivo responsável pela lógica do cRUD (api - emplyee)
 * data: 16/02/2023
 * autor: Daniel Brasil
 */

const db = require('../config/database');

// => Método responsável por criar um novo 'Employee':

exports.createEmployee = async (req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    try {
      const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, birth, employee_registration]
      );
      res.status(201).send({
        message: "Employee added successfully!",
        body: {
          employee: { name, job_role, salary, birth, employee_registration },
        },
      });
    } catch (error) {
      console.error('createEmployee', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };