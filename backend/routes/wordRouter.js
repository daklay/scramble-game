const wordController = require('../controllers/wordController')

const router = require('express').Router()

router.get('/random',wordController.getRandomWord)

module.exports = router