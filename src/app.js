const express = require('express')
const app = express()

const PORT = process.env.PORT || 8081

const filesRouter = require('./routes/files')
const stoicRouter = require('./routes/stoic')

app.use('/', filesRouter)
app.use('/stoic', stoicRouter)

app.use((req, res) => {
    res.status(404).send('<h1>Fuck you bitch!!!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})
