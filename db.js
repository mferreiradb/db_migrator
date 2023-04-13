const db = require('mysql2');
require('dotenv').config();

const connection = db.createConnection({
	host: process.env.HOSTNAME,
	user: process.env.USER_DB,
	password: process.env.USER_PASSWORD,
	database: process.env.DB_NAME
});

console.log('Database connected.');

module.exports = connection;