const {db, syncAndSeed } = require('./db/index.js');
const app = require('./app')

const init = async()=>{
  try{  
    db.authenticate()
    await syncAndSeed()

    const port = process.env.PORT || 3080
    app.listen(port,()=>console.log(`listening on port: ${port}`))
  }catch(err){
    console.log(err)
  }
}

init()