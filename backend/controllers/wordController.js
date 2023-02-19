const { sequelize } = require('../models')
const db = require('../models')
const Word = db.words

const getRandomWord = async (req, res)=>{
    let word = await Word.findOne({order:sequelize.fn('rand')})
    res.status(200).send(word)
}
module.exports = {getRandomWord}