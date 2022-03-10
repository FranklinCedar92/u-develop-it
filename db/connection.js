const mysql = require('mysql2');

//Connect to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: 'Lamppost00!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;