import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { CgListTree } from "react-icons/cg";
import { RiPieChartFill } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { HiPuzzlePiece } from "react-icons/hi2";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import image from "../assets/images/Untitled.jpg";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { setRejected } from '../../redux/state-slice/rejected-slice';
import {deleteCandidateRequest, findAllCandidateRequest, listAllCandidtaeRequest } from '../../apiRequiest/apiRequiest';

const ApplicationNavbar = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const getRejected = useSelector((state)=>state.getRejected.rejected);

  

  const onRejectHandler = async()=>{
    let result = await listAllCandidtaeRequest("Rejected Candidates");
    dispatch(setRejected(result))
  }
  
  const onShortLisedHnadler = async()=>{
    let result = await listAllCandidtaeRequest("Shortlisted");
    dispatch(setRejected(result))
  }
  const onAllhandler = async()=>{
    let result = await findAllCandidateRequest();
    dispatch(setRejected(result))
  }




  const deleteTask = async (_id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => { 
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        
        await deleteCandidateRequest(_id);
        window.location.reload();
      }
    });
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
      <div className="col-lg-10 " style={{background:"#E0EDEA"}}>
        <div className="row">
          <div className="col-lg-12">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li onClick={onAllhandler} className="page-item"><a className="page-link" href="#">All</a></li>
                <li onClick={onShortLisedHnadler} className="page-item"><a className="page-link" href="#">Shortlisted</a></li>
                <li onClick={onRejectHandler} className="page-item"><a className="page-link" href="#">rejected</a></li>
            </ul>
        </nav>
          </div>
        </div>
      {
       getRejected.length>0?(
        getRejected.map((item, i)=>{
          return(
            <div key={i} className="row py-3"style={{background:"#fff"}}>
                <div className="col-lg-4">
                  <div className="NameInfo d-flex">
                   <img src={image} alt="" />
                    <p>{item['fullName']}</p>
                  
                  <div className="range">
                    <h6>{`${item['experience']} | Expected 25k`}</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="status">
                    <p>{item["status"]}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="date">
                    <p>{item["createdDate"]}</p>
                  </div>
                  
                </div>
                <div className="col">
                <div className="removeList">
                <RiDeleteBin6Line onClick={() => deleteTask(item._id)} style={{cursor:"pointer"}}/>
                </div>
                </div>
              </div>
          )
        })
       ):("")
      }
    
      </div>
                
                
            </div>
        </div>
        </>
    );
};

export default ApplicationNavbar;