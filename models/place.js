const mongoose = require('mongoose')
const Schema = mongoose.Schema

const place = new Schema({
    text: String,
    day:String
  // ...
})

module.exports = mongoose.model('place', place)