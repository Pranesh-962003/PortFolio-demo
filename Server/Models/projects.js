const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title:String,
    description:String,
    link1:String,
    link2:String,
    image:String
    
})

const ProjectModel = mongoose.model('Projects',ProjectSchema)

module.exports = ProjectModel