const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = new mongoose.model('notely',noteSchema);

module.exports = noteModel