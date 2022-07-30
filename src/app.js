const express = require('express')
const app = express()
const routes = require('./routes/main')

const PORT = process.env.PORT || 8081

const mainRouter = require('./routes/main')

app.use(express.static('view'))

app.use('/stoic', mainRouter)

app.use((req, res) => {
    res.status(404).send('<h1>Fuck you bitch!!!</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}`)
})