// MODULOS EXTERNOS
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
// MODULOS INTERNOS
const linkRoute =  require('./routes/linkRoute')
const path = require('path')
// -------------------------------------------------------

mongoose.connect('mongodb://127.0.0.1:27017/newlink', {useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection

db.on('error', () =>{console.log('Houve um erro')})
db.once('open', () => {console.log('Banco carregado')})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(PORT, () => console.log(`Example app running on port ${PORT}`))