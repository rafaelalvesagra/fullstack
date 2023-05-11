const { Sequelize } = require("sequelize")

const bd = new Sequelize('rafael','root','rafael',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = bd