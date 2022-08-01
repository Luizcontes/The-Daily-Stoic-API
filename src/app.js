const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 8081

const StoicPage = require('./service/stoicPage')
exports.stoicPage = new StoicPage()

require('./service/scheduler').job(this.stoicPage.getTitle())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const urlencodedParser = bodyParser.urlencoded({extended: false})
// app.use(bodyParser.json())

const filesRouter = require('./routes/files')
const stoicRouter = require('./routes/stoic')

app.use('/', filesRouter)
app.use('/stoic', stoicRouter)
app.use('/index', express.static('src/view2'))

app.use((req, res) => {
    res.status(404).send('<h1>404 Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})
