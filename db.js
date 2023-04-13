const db = require('mysql2');

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'erp_lion'
});

console.log('Database connected.');

module.exports = connection;