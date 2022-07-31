const list = require('../list')
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class StoicPage {
    constructor() {
        this.pageNumber = Object.keys(list).length
        this.today = 0
    }

    actualDay() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay) + 1;
        if (this.today === day) {
            return true
        } else {
            this.today = day
            return false
        }
    }

    getCount() {
        return this.today
    }

    getPage() {
        if (!this.actualDay()) {
            this.changeFile()
        }
    }

    changeFile() {
        try {
        const content = fs.readFileSync(`./Stoic/Text/${list[this.today]}`, 'utf8')
        fs.writeFileSync('./src/view/Text/index.html', content)
            return true
        } catch (error) {
            return false
        }
    }

    testeChangeDay(index) {
        this.today = index
        this.changeFile()
    }
}

module.exports = StoicPage