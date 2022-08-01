const express = require('express')
const app = express()

const PORT = process.env.PORT || 8081

const StoicPage = require('./service/stoicPage')
exports.stoicPage = new StoicPage()

const sendSMS = require('./service/AWS_SNS').sendSMS

const { getMonths } = require('./assets/months')

const filesRouter = require('./routes/files')
const stoicRouter = require('./routes/stoic')

app.use('/', filesRouter)
app.use('/stoic', stoicRouter)
app.use('/index', express.static('src/view2'))

app.use('/sms', (req, res) => {
    const template = (`${getMonths()}\n` +
        `${this.stoicPage.getTitle()}\n` +
        `To read the full day\`s message access: ` +
        `https://stoicapi.herokuapp.com/stoic`
    )
    sendSMS(template)
    res.send('ok')
})

app.use((req, res) => {
    res.status(404).send('<h1>404 Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})
