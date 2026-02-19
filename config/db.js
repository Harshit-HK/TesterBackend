import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "u471298916_TUser",     // your hostinger DB user
  password: "pQn7lLp&2",    // your hostinger DB password
  database: "u471298916_TesterBackend",
  port: 3306,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});