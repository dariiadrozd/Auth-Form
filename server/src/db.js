const { Pool } = require('pg');
const { DATABASE, DB_HOST, DB_USER, PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DATABASE,
    password: PASSWORD,
    port: DB_PORT
})

module.exports = { pool };