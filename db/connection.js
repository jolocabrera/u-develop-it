const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL USERNAME,
        user: 'root',
        // Your MySQL password
        password: 'Pebenito1!',
        database: 'election'
    },
);

module.exports = db;