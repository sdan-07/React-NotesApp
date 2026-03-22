const express = require('express')
const app = express()

//middlewares
const cors = require('cors')
app.use(express.json())
app.use(cors())

//import
const noteRouter = require('./routes/note.route')

//health check route
app.get('/', (_,res)=>{
    res.status(200).json({
        status: "OK",
        message: "Server is running"
    })
});

app.use('/api/note', noteRouter)

module.exports = app