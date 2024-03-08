import Client from "../entities/Client";
import ClientRepository from "../repositories/ClienteRepository";
import IResult from "../utils/IResult";
export class ClientController {
  #_clienteRepository: ClientRepository;
  constructor(clienteRepository: ClientRepository) {
    this.#_clienteRepository = clienteRepository;
  }
  async getAll(): Promise<IResult> {
    try {
      const clients = await this.#_clienteRepository.findAll();
      if (clients)
        return {
          statusCode: 200,
          data: clients,
        };
      return {
        statusCode: 404,
        data: "Not Found",
      };
    } catch (error) {
      return {
        statusCode: 500,
        data: error,
      };
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get(params: Record<string, any>): Promise<IResult> {
    try {
      const clients = await this.#_clienteRepository.find(params);
      if (clients)
        return {
          statusCode: 200,
          data: clients,
        };
      return {
        statusCode: 404,
        data: "Not Found",
      };
    } catch (error) {
      return {
        statusCode: 500,
        data: error,
      };
    }
  }
  async post(entity: Client): Promise<IResult> {
    try {
      const client = await this.#_clienteRepository.create(entity);
      if (client)
        return {
          statusCode: 200,
          data: client,
        };
      return {
        statusCode: 404,
        data: "Not Found",
      };
    } catch (error) {
      return {
        statusCode: 500,
        data: error,
      };
    }
  }
}
