import { ClientController } from "../controllers/ClientController";
import ClientRepository from "../repositories/ClienteRepository";

export default function () {
  const repository = new ClientRepository();
  const controller = new ClientController(repository);
  return controller;
}
