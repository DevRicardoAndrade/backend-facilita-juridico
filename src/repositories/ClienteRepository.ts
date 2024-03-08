import IClientRepository from "./IClientRepository";
import conn from "../connection";
import Client from "../entities/Client";

export default class ClientRepository implements IClientRepository {
  async find(id: number): Promise<void | Client> {
    const result = await conn.querry(
      "SELECT id, name FROM clients WHERE id = $1",
      [id]
    );

    console.log(result);
    return;
  }
  findAll(): Client[] {
    throw new Error("Method not implemented.");
  }
  create(): Client {
    throw new Error("Method not implemented.");
  }
  update(entity: Client, id: number): Client {
    console.log(entity, id);
    throw new Error("Method not implemented.");
  }
  delete(id: number): Client {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}
