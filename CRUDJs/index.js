const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
// node or express is connecting to the mongodb
const url = "mongodb://127.0.0.1:27017/AlienDBex" // it will automatically create the database AlienDBex
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

  app.use(express.json())
  app.use(cors());
// const con = mongoose.connection

// con.on('open', function(){
//     console.log('connected...')
// })

console.log("hello")

const regRouter = require('./routers/reg')
app.use('/api', regRouter)

app.listen(9000, function(){
    console.log('Server started')
})