const fs = require('fs');
const db = require('../models');
const word = db.words;

const path = require('path');
const filePath = path.join(__dirname, './my_json_file.json');
const data = fs.readFileSync(filePath, 'utf-8');


const EnglishWords = JSON.parse(data)
async function bulkcreate(){
    await word.bulkCreate(EnglishWords)
        .then(()=> console.log('english words added to the db'))
        .catch((e)=> console.log('error adding to db',e))
}

module.exports = bulkcreate;