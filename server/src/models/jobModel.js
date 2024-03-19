const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    designation:{type:String, required:true},
    createdDate: {type:Date, default:Date.now()}
},{versionKey: false})

const jobModel = mongoose.model('jobs', dataSchema);
module.exports = jobModel;