const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SerachQuery = new Schema(
    {
        name: { type: String, required: true },
        count: { type: Number }
    }
)

module.exports = mongoose.model('search_query', SerachQuery)