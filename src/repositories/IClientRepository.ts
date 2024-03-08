import Client from "../entities/Client";

export default interface IClientRepository {
  find(id: number): Promise<void | Client>;
  findAll(): Client[];
  create(): Client;
  update(entity: Client, id: number): Client;
  delete(id: number): Client;
}
