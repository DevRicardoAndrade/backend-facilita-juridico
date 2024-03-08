import ClientRepository from "../repositories/ClienteRepository";
import IResult from "../utils/IResult";
export class ClientController {
  #_clienteRepository: ClientRepository;
  constructor(clienteRepository: ClientRepository) {
    this.#_clienteRepository = clienteRepository;
  }
  async get(id: number): Promise<IResult> {
    try {
      const client = await this.#_clienteRepository.find(id);
      return {
        statusCode: 200,
        data: client,
      };
    } catch (error) {
      return {
        statusCode: 200,
        data: error,
      };
    }
  }
}
