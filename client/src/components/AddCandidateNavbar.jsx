import React, { useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { CgListTree } from "react-icons/cg";
import { RiPieChartFill } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { HiPuzzlePiece } from "react-icons/hi2";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { addCandidateRequest } from '../../apiRequiest/apiRequiest';
import toast, { Toaster } from 'react-hot-toast';

const AddCandidateNavbar = () => {
    const path = useLocation().pathname;
    const fullNameRef = useRef(null);
    const experienceRef = useRef(null);
    const expectedSalaryRef = useRef(null);
    const genderRef = useRef(null);
    const statusRef = useRef(null);

    const handleSubmit = async() => {
        const fullName = fullNameRef.current.value;
        const experience = experienceRef.current.value;
        const expectedSalary = expectedSalaryRef.current.value;
        const gender = genderRef.current.value;
        const status = statusRef.current.value;
        if(fullName.length==0){
         toast.error("Full Name Required !")
        }
        else if(experience.length==0){
         toast.error("Experience Required !")
        }
        else if(expectedSalary.length==0){
          toast.error("Expected Salary Required !")
         }
        else if(gender.length==0){
          toast.error("Gender Required !")
         }
        else if(status.length==0){
          toast.error("Status Required !")
         }
         else{
          let resut =await addCandidateRequest(fullName,experience, expectedSalary,gender,status);
          window.location.href = "/";
         }
    };
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">    
                        <div className="left-area overflow-auto bg-body">
                            <ul style={{ listStyle: "none" }} className="p-0 ">
                                <div className="menuHeadline">
                                    <p>Menu</p>
                                </div>
                                <Link to={"/"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <RxDashboard/>
                    </span>
                  <span className=''>
                      DashBoard   
                  </span>
                </li>
            </Link>
            <Link to={"/Application"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Application" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <MdOutlineDashboard/>
                    </span>
                  <span className=''>
                  Application   
                  </span>
                </li>
            </Link>
                <Link to={"/Candidates"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Candidates" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <GrUserPolice/>
                    </span>
                  <span className=''>
                  Add Candidates   
                  </span>
                </li>
            </Link>

            <div className="menuHeadline">
                    <p>Recruitment</p>
                </div>
                <Link to={"/Jobs"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Jobs" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <FaBusinessTime/>
                    </span>
                  <span className=''>
                  Jobs   
                  </span>
                </li>
            </Link>
            

            <Link to={"/CareerSite"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/CareerSite" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <CgListTree/>
                    </span>
                  <span className=''>
                  Career site   
                  </span>
                </li>
            </Link>
            <Link to={"/MyReferrals"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/MyReferrals" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <RiPieChartFill/>
                    </span>
                  <span className=''>
                  My Referrals
                  </span>
                </li>
            </Link>
            <div className="menuHeadline">
                    <p>Organization</p>
                </div>

                <Link to={"/Employee"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Employee" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <GrUserPolice/>
                    </span>
                  <span className=''>
                  Employee
                  </span>
                </li>
                </Link>

                <Link to={"/Structure"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Structure" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <HiPuzzlePiece/>
                    </span>
                  <span className=''>
                  Structure
                  </span>
                </li>
                </Link>

                <Link to={"/Report"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Report" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <MdOutlineReportGmailerrorred/>
                    </span>
                  <span className=''>
                  Report
                  </span>
                </li>
                </Link>
                <Link to={"/Settings"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/Settings" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <IoSettingsSharp/>
                    </span>
                  <span className=''>
                  Settings
                  </span>
                </li>
                </Link>
                <Link to={"/logout"} style={{textDecoration:"none"}}>
                <li className={`p-2 customHover mb-1 ${path === "/logout" ? "active sidemenu" : "Not_active_sidemenu"}`}>
                    <span className="fs-6 pe-2 icon">
                      <IoLogOutSharp/>
                    </span>
                  <span className=''>
                  logout
                  </span>
                </li>
                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" ref={fullNameRef} placeholder="Enter Full Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">Experience</label>
                            <input type="text" className="form-control" id="experience" ref={experienceRef} placeholder="Enter Experience" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expectedSalary" className="form-label">Expected Salary</label>
                            <input type="text" className="form-control" id="expectedSalary" ref={expectedSalaryRef} placeholder="Enter Expected Salary" />
                        </div>
                        <div className="mb-3">
    <label htmlFor="gender" className="form-label">Gender</label>
    <select className="form-select" id="gender" ref={genderRef} defaultValue="Male">
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
</div>
<div className="mb-3">
    <label htmlFor="status" className="form-label">Status</label>
    <select className="form-select" id="status" ref={statusRef} defaultValue="Shortlisted">
        <option value="Shortlisted">Shortlisted</option>
        <option value="Rejected Candidates">Rejected Candidates</option>
    </select>
</div>
                        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-lg-2">
                      
                    </div>
                </div>
                <Toaster position={'bottom-center'} />
            </div>
        </>
    );
};

export default AddCandidateNavbar;
