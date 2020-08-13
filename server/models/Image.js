const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    title: String,
    url: String,
    explanation: String,
    like: Boolean
})

const Image = mongoose.model('image', imageSchema)
module.exports = Image
