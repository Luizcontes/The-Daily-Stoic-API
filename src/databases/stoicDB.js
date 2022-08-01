const { Pool } = require('pg')
require('dotenv').config

let mainPool = null

function createPool() {
    const client = new Pool({
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        database: process.env.DB,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        ssl: {
            rejectUnauthorized: false
        }
    })
    return client
}

function getPool() {
    if(!mainPool) {
        mainPool = createPool()
    }
    return mainPool
}

// client.connect()

module.exports = { getPool }