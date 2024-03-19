import React from 'react';
import logo from '../assets/images/logo.png'

const ApplicationHeader = () => {
  return (
    <div>
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-2">
              <div className="log">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-7" style={{background:"#E0EDEA"}}>
              <div className="text pt-2">
                <p>Application</p>
              </div>
              
            </div>
            <div className="col-lg-3" style={{background:"#E0EDEA"}}>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default ApplicationHeader;