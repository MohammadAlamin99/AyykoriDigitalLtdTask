import axios from "axios";

let BaseURL = "http://localhost:5000";

// add candidate
export  async function addCandidateRequest(fullName,experience,expectedSalary,gender,status,photo) {
    try {
        let reqBody ={fullName:fullName, experience:experience, expectedSalary:expectedSalary, gender:gender,status:status,photo:photo};
        let result = await axios.post(BaseURL+'/api/v1/candidate',reqBody);
        let data =  result;
        return data;
    }
    catch (e) {
        console.log(e)
        return false
    }
 }



export  async function totalCandateRequest() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/totalCandate');
        let data =  result.data['message']
        return data;
    }
    catch (e) {
        return false
    }
 }
export async function ListCandidateByStatusRequest(status) {
    try {
        let result = await axios.get(BaseURL+'/api/v1/ListCandidateByStatus/'+status);
        let data =  result['data'];
        return data;
    }
    catch (e) {
        return false
    }
 }
export async function listAllCandidtaeRequest(status) {
    try {
        let result = await axios.get(BaseURL+'/api/v1/ListCandidateByStatus/'+status);
        let data =  result.data['data'];
        return data;
    }
    catch (e) {
        return false
    }
 }


//  create jobs
export  async function createNewJobsRequest(designation) {
    try {
        let reqBody={designation:designation}
        let result = await axios.post(BaseURL+'/api/v1/createJobs',reqBody);
        return result;
    }
    catch (e) {
        return false
    }
 }

//  get new jobs
export  async function getNewjobsRequest() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/recentJobs');
        let data = result.data['data']
        return data;
    }
    catch (e) {
        return false
    }
 }
//  find all candidate list
export  async function findAllCandidateRequest() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/findCandidate');
        let data = result.data['data']
        return data;
    }
    catch (e) {
        return false
    }
 }


export  async function readGenderRequest() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/gender');
        let data = result.data['message']
        return data;
    }
    catch (e) {
        return false
    }
 }

//  delete api call for candidate
export  async function deleteCandidateRequest(id) {
    try {
        let result = await axios.get(BaseURL+'/api/v1/removeCandidate/'+id);
        let data = result
        return data;
    }
    catch (e) {
        console.log(e)
        return false
    }
 }

