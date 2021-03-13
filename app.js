const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/iaasthaEmployees'

const app = express()

mongoose.connect(url , {useNewUrlParser:true})

const connec = mongoose.connection

connec.on('open' , () => {
    console.log('Mongodb connected....');
})

app.use(express.json())
const detailRouter = require('./routes/details')
app.use('/details' , detailRouter)

app.listen(8000 , () => {
    console.log('listening on port 8000');
})