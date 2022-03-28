import * as oracledb from 'oracledb';

export default class oracledbConnection {
  private readonly config: any;
  private connection: any;
  constructor(public Config: any) {
    this.config = Config;
  }
  private async _setConnection() {
    return await oracledb.getConnection(this.config);
  }
  public async fetchData(queries: string): Promise<any> {
    return new Promise(async (resolve) => {
      this.connection = await this._setConnection();
      const query = this.connection.execute(queries, [], { resultSet: true });
      resolve(query.resultSet);
    });
  }
  public async closeConnection() {
    await this.connection.close();
  }
}
