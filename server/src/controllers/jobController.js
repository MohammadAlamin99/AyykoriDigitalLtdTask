const { addJobs, getJobs } = require("../services/jobService");


exports.createJobs = async (req, res) => {
    let result = await addJobs(req);
    return res.status(200).json(result);
 }
exports.recentJobs = async (req, res) => {
    let result = await getJobs(req);
    return res.status(200).json(result);
 }