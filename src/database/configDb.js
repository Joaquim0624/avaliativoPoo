import mysql from "mysql2"
const conn = mysql.createConnection({
  host: "localhost",
  user:"root",
  password:"",
  database: "avaliativofinancas"
});

conn.connect((err) =>{
  if(err){
    console.log("Problemas com BD: ", err);
    return;
  } console.log("Conectado ao BD...")
})

export { conn }