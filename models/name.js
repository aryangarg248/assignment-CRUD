const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    intrest:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Detail' , NameSchema)