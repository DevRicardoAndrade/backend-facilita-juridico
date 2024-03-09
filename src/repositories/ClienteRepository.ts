import IClientRepository from "./IClientRepository";
import conn from "../connection";
import Client from "../entities/Client";
interface IPoint {
  x: number;
  y: number;
}
export default class ClientRepository implements IClientRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async find(params: Record<string, any> | null): Promise<null | Client[]> {
    const values = [];
    let id;
    let email;
    let name;
    let telephone;
    if (params) {
      id = params["id"];
      email = params["email"];
      name = params["name"];
      telephone = params["telephone"];
    }
    const sqlText =
      "SELECT id, name, email, telephone, cordX, cordY FROM clients ";
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
    if (id) {
      if (!email && !name && !telephone) {
        whereString += " WHERE";
      } else {
        whereString += " AND";
      }
      whereString += ` id = $${values.length + 1}`;
      values.push(id);
    }
    const result = await conn.query(sqlText + whereString, values);
    if (result.rowCount) {
      const clientData = result.rows.map((data) => {
        return Client.parse(
          data.id,
          data.name,
          data.email,
          data.telephone,
          data.cordx,
          data.cordy
        );
      });
      return clientData;
    }
    return null;
  }

  async create(entity: Client): Promise<void | Client> {
    const sqlText =
      "INSERT INTO clients (name, email, telephone, cordX, cordY) VALUES ($1, $2, $3, $4, $5) RETURNING id";
    const result = await conn.query(sqlText, [
      entity.name,
      entity.email,
      entity.telephone,
      entity.cordX,
      entity.cordY,
    ]);
    if (result.rowCount) {
      const row = result.rows[0];
      entity.id = row.id;
      return entity;
    }
    return;
  }
  async getRoutesOptimized() {
    const clients: Client[] | null = await this.find(null);
    if (clients) {
      clients.sort((a, b) => {
        const distanceA = this.calculeDistance(
          { x: 0, y: 0 },
          { x: a.cordX, y: a.cordY }
        );
        const distanceB = this.calculeDistance(
          { x: 0, y: 0 },
          { x: b.cordX, y: b.cordY }
        );
        return distanceA - distanceB;
      });
      return clients;
    }
  }
  calculeDistance(pointOne: IPoint, pointTwo: IPoint) {
    const X = pointTwo.x - pointOne.x;
    const Y = pointTwo.y - pointOne.y;
    return Math.sqrt(X * X + Y * Y);
  }
}
