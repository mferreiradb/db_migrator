const db = require('mysql2');
const env = require('dotenv').config();

console.log(env.USER_DB);

const connection = db.createConnection({
    host: env.HOSTNAME,
    user: env.USER_DB,
    password: env.USER_PASSWORD,
    database: env.DB_NAME
});

console.log('Database connected.');

module.exports = connection;