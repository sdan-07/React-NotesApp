const express = require('express')
const app = express()

//middlewares
const cors = require('cors')
app.use(express.json())
app.use(cors())

//import
const noteRouter = require('./routes/note.route')

app.use('/api/note', noteRouter)

module.exports = app