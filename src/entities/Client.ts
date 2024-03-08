export default class Client {
  public id: number;
  public name: string;
  public email: string;
  public telephone: string;
  constructor(id: number, name: string, email: string, telephone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
  }
  static parse(id: number, name: string, email: string, telephone: string) {
    return new Client(id, name, email, telephone);
  }
}
