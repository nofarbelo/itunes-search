const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { port } = require('./config')

const db = require('./server/db')
const searchQueryRouter = require('./server/routes/search-query-router')
const usersRouter = require('./server/routes/users-router')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', searchQueryRouter)
app.use('/user', usersRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))