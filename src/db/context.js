const sql  = require('mssql');
const config = {
    user: process.env.DB_USER || 'dbLogin',
    password: process.env.DB_PASSWORD || 'testimony@#1212',
    server: process.env.DB_HOST || 'bluecore01.database.windows.net', 
    database: process.env.DB_NAME || 'KrotonTestimony',
    encrypt: true
}

module.exports = class Context {
    static getRequest(){
        return new Promise((resolve, reject) => {
            sql.on('error', err => {
                reject(err);
            })

            new sql.ConnectionPool(config).connect().then(pool => { return pool.request(); })
                .then(request => {
                    resolve(request);
                    sql.close();
                })
                .catch(err => { reject(err) });
        });
    } 
}