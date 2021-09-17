const express = require('express');
const app = express();
module.exports = app
const path = require('path');
const axios = require('axios');
app.use(express.json())

//app.get('/',(req,res,next)=> res.sendFile(path.join(__dirname,'../index.html')));
//app.use(express.static(path.join(__dirname,'../index.html')));
app.use(express.static('public'))

app.use('/api', require('./api'))

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})