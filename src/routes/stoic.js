const express = require('express');
const router = express.Router();
// const stoicPages = require('../assets/list');
// const fs = require('fs');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const StoicPage = require('../service/stoicPage')

// const awsService = require('../service/AWS_SNS')

// const stoicPage = new StoicPage()

const stoicPage = require('../app').stoicPage

router.get('/', (req, res) => {
    try {
        if (!stoicPage.getPage()) {
            res.sendFile('index.html', { root: './src/view/Text' })
        } else {
            res.redirect('/')
        }
    } catch (error) {
        if (error)
            res.redirect('/')
    }
})

router.get('/count', (req, res) => {
    let count = stoicPage.getCount()
    res.send(`${count}`)
})

router.get('/:id', stoicPage.testeChangeDay)

module.exports = router