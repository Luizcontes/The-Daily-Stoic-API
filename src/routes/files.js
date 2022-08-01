const express = require('express')
const router = express.Router()
const { addFoneNumber, getFoneList } = require('../controllers/stoicController')

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

router.post('/phonenumber', addFoneNumber)

router.get('/getfones', getFoneList)

router.get('/', (req, res) => {
    res.redirect('/index')
})

module.exports = router