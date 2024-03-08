import express from "express";
import { config } from "dotenv";
import conn from "./connection";
import clientRoutes from "./routes/client";

config();

const PORT = process.env.PORT || 3030;

const app = express();
app.use(clientRoutes);
app.use(express.json());

conn.connect();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
