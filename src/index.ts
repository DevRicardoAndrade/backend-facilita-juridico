import express from "express";
import { config } from "dotenv";
import conn from "./connection";
import clientRoutes from "./routes/client";
import cors from "cors";

config();

const PORT = process.env.PORT || 3030;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(clientRoutes);

conn.connect();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
