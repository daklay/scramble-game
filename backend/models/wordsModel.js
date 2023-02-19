module.exports=(sequelize, DataTypes)=>{
    const Word = sequelize.define("word",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        word:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Word;
}