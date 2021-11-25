const Context = require("./context");
const sql = require("mssql");

module.exports = class UserDb {
  static async listMock() {
    const users = [
      { id: 1, name: "Scuby" },
      { id: 2, name: "Scuzzy" },
    ];

    return users;
  }

  static async list() {
    const request = await Context.getRequest();

    const query = `
            Select
                Id as 'id',
                Name as 'name'
            From
                [User]
        `;

    const result = await request.query(query);
    const users = result.recordset;

    return users;
  }
};
