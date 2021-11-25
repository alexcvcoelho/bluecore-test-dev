const sql = require("mssql");

const config = {
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  server: process.env.DB_HOST || "server.database.windows.net",
  database: process.env.DB_NAME || "database",
  encrypt: true,
};

module.exports = class Context {
  static getRequest() {
    return new Promise((resolve, reject) => {
      sql.on("error", (error) => {
        reject(error);
      });

      new sql.ConnectionPool(config)
        .connect()
        .then((pool) => {
          return pool.request();
        })
        .then((request) => {
          resolve(request);
          sql.close();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};
