import Client from "../entities/Client";

export default interface IClientRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  find(params: Record<string, any>): Promise<void | Client[]>;
  findAll(): Promise<void | Client[]>;
  create(entity: Client): Promise<void | Client>;
}
