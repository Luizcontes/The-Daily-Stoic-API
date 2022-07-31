const express = require('express');
const router = express.Router();
const stoicPages = require('../list');
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const StoicPage = require('../service/stoicPage')

const stoicPage = new StoicPage()

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

router.get('/:id', (req, res) => {
    stoicPage.testeChangeDay(req.params.id)
    res.sendFile('index.html', { root: './src/view/Text' })
})

module.exports = router