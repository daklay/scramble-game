const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//bulkcreate fun
const db = require('./models')
const bulkcreate = require('./db')

const app = express();

var corOption = {
    origin:'https://localhost:8001'
}


//middl
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers 
const router = require('./routes/wordRouter')
app.use('/api/word', router)

db.sequelize.sync({force:true}).then(()=>{
    bulkcreate();
})
//test
app.get('/',(req,res)=>{
    res.json({
        message:'working'
    })
})
//8081
const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log('listening')
})