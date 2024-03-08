import { Client } from "pg";
import IConfig from "./IConfig";
import { config as dotenvLoad } from "dotenv";

dotenvLoad();

const config: IConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: "postgres",
  port: Number(process.env.DB_PORT),
};
const client = new Client(config);

const conn = {
  connect: async () => {
    try {
      await client.connect();
      console.log("Connected to PostgreSQL");
    } catch (error) {
      console.error(error);
    }
  },
  end: async () => {
    try {
      await client.end();
      console.log("Disconnected to PostgreSQL");
    } catch (error) {
      console.error(error);
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: async (sqlText: string, parameters?: any[]) => {
    return await client.query(sqlText, parameters);
  },
};

export default conn;
