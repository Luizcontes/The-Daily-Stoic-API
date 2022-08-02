const { Pool } = require('pg')
require('dotenv').config

let mainPool = null

function createPool() {
    const client = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
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