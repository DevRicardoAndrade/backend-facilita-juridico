import express from "express";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3030;

const app = express();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
