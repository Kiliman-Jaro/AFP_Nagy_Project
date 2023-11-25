import mysql from "mysql"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'etel_rendeles_app',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

export default db;