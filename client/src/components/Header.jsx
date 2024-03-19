import React from 'react';
import logo from '../assets/images/logo.png'
import { GrFormSearch } from "react-icons/gr";

const Header = () => {
  return (
    <div>
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-2">
              <div className="log">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text pt-2">
                <p>Good Morning</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="search d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <GrFormSearch className='s-icon'/>
              </div>
            </div>
            <div className="col-lg-2 rightArea">
              <h1>Welcome back XTZ</h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;