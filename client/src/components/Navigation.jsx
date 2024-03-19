import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { CgListTree } from "react-icons/cg";
import { RiPieChartFill } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { HiPuzzlePiece } from "react-icons/hi2";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import DashBoard from './DashBoard';
import { createNewJobsRequest, getNewjobsRequest } from '../../apiRequiest/apiRequiest';

import {useSelector, useDispatch } from "react-redux";
import { setNewJob } from '../../redux/state-slice/getJobs-slice';
const Navigation = () => {
    const path = useLocation().pathname;
    const [inputValue, setInputValue] = useState('');
    const [options] = useState([
      "Web Developer",
      "UX/UI Designer",
      "Social Manager",
      "Digital Marketing",
      "App Developer"
    ]);
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const newJobsRef = useRef();

    const onClickHandler = async()=>{
      const newJob = newJobsRef.current.value;
      let result = await createNewJobsRequest(newJob);
      let data = await getNewjobsRequest();
      dispatch(setNewJob(data))
    }

    // using redux for get new job state management

    const dispatch = useDispatch();
    const getNewJob = useSelector((state)=>state.getNewJob.newJob);
    
    useEffect(()=>{
      (async()=>{
        let result = await getNewjobsRequest();
        dispatch(setNewJob(result))
      })()
    },[])
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
                  <DashBoard/>
                </div>
                <div className="col-lg-2">
                  <div className="inputFiled">
                  <label htmlFor="exampleDataList" className="form-label">Create New Jobs</label>
                    <input
                      className="form-control"
                      list="datalistOptions"
                      id="exampleDataList"
                      placeholder="Type to search..."
                      value={inputValue}
                      ref={newJobsRef}
                      onChange={handleInputChange}
                    />
                      <datalist id="datalistOptions">
                        {options.map((option, index) => (
                          <option key={index} value={option} />
                        ))}
                      </datalist>
                  </div>
                    <div className="btn">
                      <button onClick={onClickHandler}>+ Create New job</button>
                    </div>
                    <div className="textJob">
                    <p>Recent Added Jobs</p>
                    </div>

                    {
                      getNewJob.length>0?(
                        getNewJob.map((item, i)=>{
                          return(
                            <div key={i} className="employeer">
                              <h4>{item["designation"]}</h4>
                              <span>50</span>
                              <p>Total Application</p>
                            </div>
                          )
                        })
                      ):("No recent jobs")
                    }
                 
                  

                </div>
            </div>
        </div>
        </>
    );
};

export default Navigation;