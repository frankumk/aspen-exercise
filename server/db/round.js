const Sequelize = require('sequelize')
const { STRING, INTEGER } = Sequelize
const db = require('./db')

const Round = db.define('round', {
  p1Play: {
    type: STRING,
  },
  p2Play: {
    type: STRING
  },
  p1deck: {
    type: INTEGER
  },
  p2deck: {
    type: INTEGER
  },
  winner: {
    type: STRING
  }

})

module.exports = Round