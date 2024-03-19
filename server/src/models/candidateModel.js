const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    fullName:{type:String, required:true},
    experience:{type:String, required:true},
    expectedSalary:{type:String, required:true},
    gender:{type: String, required: true},
    status:{type:String, required:true},
    photo:{type:String},
    createdDate: {type:Date, default:Date.now()}
},{versionKey: false})

const candidateModel = mongoose.model('candidates', dataSchema);
module.exports = candidateModel;



