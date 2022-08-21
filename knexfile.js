require('dotenv').config()

module.exports = {
  client: 'mssql',
  connection: {
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    encrypt: process.env.DATABASE_SSL.toLowerCase() === 'true'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './src/database/migrations',
    tableName: 'migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}
