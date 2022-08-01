const express = require('express')
const router = express.Router()

router.get('/Styles/*', (req, res) => {
    res.sendFile(req.url, { root: './src/view' }, err => {
        if (err) {
            res.redirect('/')
        }
    })
})

router.get('/Images/*', (req, res) => {
    res.sendFile(req.url, { root: './src/view' }, err => {
        if (err) {
            res.redirect('/')
        }
    })
})

router.get('/phonenumber', (req, res) => {
    console.log(req.query)
    res.redirect('/index')
})

router.get('/', (req, res) => {
    res.redirect('/index')
})

module.exports = router