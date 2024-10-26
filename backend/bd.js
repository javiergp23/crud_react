import mysql from 'mysql';

export const db = mysql.createconecction({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud2"
})