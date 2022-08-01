const list = require('../assets/list')
const fs = require('fs');
const jsdom = require('jsdom');
const { ComputeOptimizer } = require('aws-sdk');
const { JSDOM } = jsdom;

class StoicPage {
    constructor() {
        this.pageNumber = Object.keys(list).length
        this.content = fs.readFileSync(`./Stoic/Text/${list[1]}`, 'utf8')
        this.today = 1
        this.title
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
            this.content = fs.readFileSync(`./Stoic/Text/${list[this.today]}`, 'utf8')
            fs.writeFileSync('./src/view/Text/index.html', this.content)
            this.setTitle()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    testeChangeDay = (req, res) => {
        this.today = req.params.id
        this.changeFile()
        this.setTitle()
        res.sendFile('index.html', { root: './src/view/Text' })
    }

    setTitle() {
        const page = new JSDOM(this.content)
        const title = page.window.document.querySelector('.class_s13').textContent
        this.title = title
        return this.title
    }

    getTitle() {
        if (this.title === undefined) {
            const title = this.setTitle()
            return title
        } else {
            return this.title
        }
    }
}

module.exports = StoicPage