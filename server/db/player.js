const Sequelize = require('sequelize')
const { STRING, INTEGER } = Sequelize
const db = require('./db')

const Record = db.define('record', {
  username: {
    type: STRING,
    allowNull: false
  },
  wins: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Record