import Client from "../entities/Client";

export default interface IClientRepository {
  find(id: number): Promise<void | Client>;
  findAll(): Promise<void | Client[]>;
  create(entity: Client): Promise<void | Client>;
}
