import mysql from 'mysql';
//hay que alterar la conexion a la base de datos 


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud2"
});