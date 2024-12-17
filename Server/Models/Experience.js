const mongoose = require('mongoose')


const ExperienceSchema = new mongoose.Schema({
    comapny:String,
    role:String,
    des:String,
    start:String,
    end:String,

})


const ExpModel = mongoose.model('Experience',ExperienceSchema)

module.exports = ExpModel