const express = require('express')
const app = express()
const noteModel = require('./models/notely.model')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.post('/create-note', async(req,res)=>{
    try{
        await noteModel.create({
            title: req.body.title,
            description: req.body.description
        })

        res.status(201).json({
            message: "Note Added"
        })
    }catch(err){
        console.error(err)
        res.status(500).json({message: "Server Error"})
    }
})

app.get('/notelies', async(req,res)=>{

    try{
        const notelies = await noteModel.find()
        if(!notelies) res.status(404).json({message: "Notes not found"})
        res.status(200).json({
            message: "Notes fetched",
            notes: notelies
        })
    }catch(err){
        console.error(err)
        res.status(500).json({message: "Server Error"})
    }
})

app.delete('/delete-all', async(req,res)=>{
    try{
        const notelies = await noteModel.find()
        if(!notelies) res.status(404).json({message: "Nothing to delete"})
        
        await noteModel.deleteMany()
        res.status(200).json({message: "All notes deleted"})

    }catch(err){
        console.error(err)
        res.status(500).json({message: "Server Error"})
    }
})

module.exports = app