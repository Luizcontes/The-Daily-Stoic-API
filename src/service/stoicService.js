const stoicRepository = require('../repositories/stoicRepositoy')

class StoicService {

    constructor() {
        this.stoicRepo = new stoicRepository()
    }

    getAll() {
        return this.stoicRepo.getFonesNumber()
    }

    insertFoneNumber(number) {
        return this.stoicRepo.addFoneNumber(number)
    }
}

module.exports = StoicService