const { getPool } = require('../databases/stoicDB')

class StoicRepository {

    async getFonesNumber() {
        const query = 'SELECT * FROM list;'
        // client.connect()
        const result = await getPool().query(query)
        // client.release()
        // getPool.release()
        return result
    }

    async addFoneNumber(number) {
        const query = 'INSERT INTO list (telefone) VALUES ($1);'
        // client.connect()
        const result = await getPool().query(query, [number])
        // client.done()
        // console.log(number)
        return { ...result }
        // return {rowCount: number}
    }
}

module.exports = StoicRepository