const express = require('express');
const router = express.Router();
const stoicPages = require('../list');
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


router.get('/', (req, res) => {
    const path = `./Stoic/Text/${stoicPages[1]}`
    let content = fs.readFileSync(path, 'utf8')
    const dom = new JSDOM(content)
    const body = dom.window.document.querySelector('body').innerHTML
    // console.log(content)
    res.sendFile('index.html', { root: './src/view/Text' })
})



router.get('/*', (req, res) => {
    console.log(req.params[0])
    // console.log(req.url)
    res.sendFile(req.url, { root: './src/view' }, err => {
        if (err) {
            res.redirect('/')
        }
        else {
            console.log('Sent:', req.url)
        }
    })
})


// router.get('/Styles/*', (req, res) => {
//     // console.log(req.params[0])
//     console.log(req)
//     res.sendFile(req.params[0], {root: './src/view/Styles'})
// })

module.exports = router