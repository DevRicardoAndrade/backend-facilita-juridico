import IClientRepository from "./IClientRepository";
import conn from "../connection";
import Client from "../entities/Client";

export default class ClientRepository implements IClientRepository {
  async find(id: number): Promise<void | Client> {
    const sqlText =
      "SELECT id, name, email, telephone FROM clients WHERE id = $1";
    const result = (await conn.query(sqlText, [id])).rows[0];
    const clientData = Client.parse(
      result.id,
      result.name,
      result.email,
      result.telephone
    );
    return clientData;
  }
  findAll(): Promise<void | Client[]> {
    throw new Error("Method not implemented.");
  }
  async create(entity: Client): Promise<void | Client> {
    const sqlText =
      "INSERT INTO clients (name, email, telephone) VALUES ($1, $2, $3)";
    const result = await conn.query(sqlText, [
      entity.name,
      entity.email,
      entity.telephone,
    ]);
    console.log(result);
    return;
  }
  update(entity: Client, id: number): Promise<void | Client> {
    console.log(entity, id);
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void | Client> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}
