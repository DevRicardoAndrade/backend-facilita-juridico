import { Client } from "pg";
import IConfig from "./IConfig";

const config: IConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};

const client = new Client(config);

const conn = {
  connect: () => {
    client.connect();
  },
  end: () => {
    client.end();
  },
  querry: async (sqlText: string, parameters?: any[]) => {
    return await client.query(sqlText, parameters);
  },
};

export default conn;
