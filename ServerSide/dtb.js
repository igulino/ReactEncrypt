const database = require('mysql');

module.exports = (
    database.createPool({
        host: "localhost",
        user: "root",
        database: "crudtest",
        password: "password"
    })
)
//sktgsktg5