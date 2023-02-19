const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false
    }
)
sequelize.authenticate()
    .then(()=>{ console.log('connected to db') })  
    .catch((err)=>{ console.log(err) })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.words = require('./wordsModel.js')(sequelize, DataTypes)
db.sequelize.sync({force:true}).then(()=>{
    console.log('sync...')
})

module.exports=db