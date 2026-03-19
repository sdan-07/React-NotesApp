const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.controller')

router.post('/create-note', noteController.createPost)

router.get('/fetch-notes', noteController.fetchNotes)

router.delete('/delete-all', noteController.deleteAllNotes)

module.exports = router