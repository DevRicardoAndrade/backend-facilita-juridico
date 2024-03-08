import express from "express";
import { config } from "dotenv";
import conn from "./connection";

config();

const PORT = process.env.PORT || 3030;

const app = express();

conn.connect();
console.log("CONECTANDO AO BD");

conn.querry("SELECT NOW()").then((result) => {
  console.log(result);
});

conn.end();
console.log("DESCONECTANDO DO BD");

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
