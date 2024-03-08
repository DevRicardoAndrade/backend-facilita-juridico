export default interface IConfig {
  user?: string; // default process.env.PGUSER || process.env.USER
  password?: string; //default process.env.PASSWORD
  host?: string; // default process.env.PGHOST
  database?: string; // default process.env.PGDATABASE || user
}
