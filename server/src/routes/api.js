const express = require("express");
const candidateController  = require("../controllers/candidateController");
const jobController  = require("../controllers/jobController");

const router = express.Router();




router.post("/candidate", candidateController.candidate);
router.get("/totalCandate", candidateController.totalCandate);
router.get("/ListCandidateByStatus/:status", candidateController.ListCandidateByStatus);

router.post("/createJobs", jobController.createJobs);
router.get("/recentJobs", jobController.recentJobs);
router.get("/findCandidate", candidateController.findCandidate);
router.get("/gender", candidateController.gender);
router.get("/removeCandidate/:id", candidateController.removeCandidate);


module.exports = router;