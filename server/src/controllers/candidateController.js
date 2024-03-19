const { addCandidate, totalCandidate, ListCandidateByStatus, findAllCandidte, readGender, DeleteCandidate } = require("../services/candidateService");



exports.candidate = async (req, res) => {
    let result = await addCandidate(req);
    return res.status(200).json(result);
 }
exports.totalCandate = async (req, res) => {
    let result = await totalCandidate(req);
    return res.status(200).json(result);
 }
exports.ListCandidateByStatus = async (req, res) => {
    let result = await ListCandidateByStatus(req);
    return res.status(200).json(result);
 }
exports.findCandidate = async (req, res) => {
    let result = await findAllCandidte(req);
    return res.status(200).json(result);
 }
exports.gender = async (req, res) => {
    let result = await readGender(req);
    return res.status(200).json(result);
 }
exports.removeCandidate = async (req, res) => {
    let result = await DeleteCandidate(req);
    return res.status(200).json(result);
 }
