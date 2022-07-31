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

module.exports = router