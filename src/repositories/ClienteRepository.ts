import IClientRepository from "./IClientRepository";
import conn from "../connection";
import Client from "../entities/Client";

export default class ClientRepository implements IClientRepository {
  async find(id: number): Promise<void | Client> {
    const sqlText =
      "SELECT id, name, email, telephone FROM clients WHERE id = $1";
    const result = await conn.query(sqlText, [id]);
    if (result.rowCount) {
      const row = result.rows[0];
      const clientData = Client.parse(
        row.id,
        row.name,
        row.email,
        row.telephone
      );
      return clientData;
    } else return;
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
