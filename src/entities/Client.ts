export default class Client {
  public id: number;
  public name: string;
  public email: string;
  public telephone: string;
  public cordX: number;
  public cordY: number;
  constructor(
    id: number,
    name: string,
    email: string,
    telephone: string,
    cordX: number,
    cordY: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.cordX = cordX;
    this.cordY = cordY;
  }
  static parse(
    id: number,
    name: string,
    email: string,
    telephone: string,
    cordX: number,
    cordY: number
  ) {
    return new Client(id, name, email, telephone, cordX, cordY);
  }
}
