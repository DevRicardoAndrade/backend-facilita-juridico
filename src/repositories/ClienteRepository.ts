import IClientRepository from "./IClientRepository";
import conn from "../connection";
import Client from "../entities/Client";

export default class ClientRepository implements IClientRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async find(params: Record<string, any>): Promise<void | Client[]> {
    const values = [];
    const email = params["email"];
    const name = params["name"];
    const telephone = params["telephone"];

    const sqlText = "SELECT id, name, email, telephone FROM clients ";
    let whereString = "";

    if (email) {
      whereString += " WHERE email = $1";
      values.push(email);
    }
    if (name) {
      if (!email) {
        whereString += " WHERE";
      } else {
        whereString += " AND";
      }
      whereString += ` name LIKE $${values.length + 1}`;
      values.push(`%${name}%`);
    }
    if (telephone) {
      if (!email && !name) {
        whereString += " WHERE";
      } else {
        whereString += " AND";
      }
      whereString += ` telephone = $${values.length + 1}`;
      values.push(telephone);
    }
    const result = await conn.query(sqlText + whereString, values);
    if (result.rowCount) {
      const clientData = result.rows.map((data) => {
        return Client.parse(data.id, data.name, data.email, data.telephone);
      });
      return clientData;
    }
    return;
  }
  async findAll(): Promise<void | Client[]> {
    const sqlText = "SELECT id, name, email, telephone FROM clients";
    const result = await conn.query(sqlText);
    if (result.rowCount) {
      const clientData = result.rows.map((data): Client => {
        return Client.parse(data.id, data.name, data.email, data.telephone);
      });
      return clientData;
    } else return;
  }
  async create(entity: Client): Promise<void | Client> {
    const sqlText =
      "INSERT INTO clients (name, email, telephone) VALUES ($1, $2, $3) RETURNING id";
    const result = await conn.query(sqlText, [
      entity.name,
      entity.email,
      entity.telephone,
    ]);
    if (result.rowCount) {
      const row = result.rows[0];
      entity.id = row.id;
      console.log(entity);
      return entity;
    }
    return;
  }
}
