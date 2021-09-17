const db = require('./db')
const Player = require('./player')


const syncAndSeed = async()=>{
  try{
    await db.sync({force: true})
    const PlayerOne = Player.create({ username: "PlayerOne", wins: 0 })
    const Computer = Player.create({ username: "PlayerTwo", wins: 0 })
  }catch(err){
    throw(err)
  }
}

module.exports = {
  syncAndSeed,
  db,
  Player,
}