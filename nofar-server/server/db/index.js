const mongoose = require('mongoose')
const { dbConnect } = require('../../config')

//'mongodb://127.0.0.1:27017/search_query'

mongoose
    .connect(dbConnect, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db