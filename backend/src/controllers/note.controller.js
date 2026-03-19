const noteModel = require('../models/notely.model')

const createPost = async (req,res) => {
    try{
        const {title, description} = req.body

        const note = await noteModel.create({title, description})

        return res.status(201).json({
            message: "Note Added",
            note
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({message: "Server Error"})
    }
}

const fetchNotes = async (_,res) => {
    try{
        const notes = await noteModel.find()
        if(!notes) res.status(404).json({message: "Notes not found"})

        return res.status(200).json({
            message: "Notes fetched",
            notes
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({message: "Server Error"})
    }
}

const deleteAllNotes = async (_,res) => {
    try{
        const notes = await noteModel.find()
        if(!notes) res.status(404).json({message: "Nothing to delete"})
        
        await noteModel.deleteMany()
        return res.status(200).json({message: "All notes deleted"})

    }catch(err){
        console.error(err)
        return res.status(500).json({message: "Server Error"})
    }
}

module.exports = {createPost, fetchNotes, deleteAllNotes}