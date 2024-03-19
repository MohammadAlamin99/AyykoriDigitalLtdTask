const jobModel = require("../models/jobModel");


exports.addJobs = async (req) => {
    try {
        let reqBody = req.body;
        let result = await jobModel.create(reqBody);
        return {status:"success", message:result}
    } catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


exports.getJobs = async (req) => {
    try {

        let result = await jobModel.find()
        return({status:"success", data:result});
    } catch (e) {
        console.log(e)
        return {status:"fail", message:"Something Went Wrong"}
    }
}