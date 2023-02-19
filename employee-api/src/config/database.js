/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionsStrings' (PostgresSQL)
 * data: 16/02/2023
 * autor: Daniel Brasil
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgres://postgres:brasil1982@localhost:5432/employee-api"
});

pool.on('error', (err, client) => {
    console.error('Unexected error on idle client', err)
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};