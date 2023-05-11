const Sequelize = require("sequelize")
const bd = require("./sql")

const User = bd.define('User',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

User.sync()
module.exports = User