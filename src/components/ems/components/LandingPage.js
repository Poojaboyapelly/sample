// LandingPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link,useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/ems/employee/signin');
  };
  const handleSignUp = () => {
    navigate('/ems/employee/signup');
  };

  return (
    <div>
    <div className="landing-content">
      <h1 class="d-block p-2 ">Employee Management System</h1>
      <div >
      {/* <Navbar /> */}
      </div>
      <p class="h5">Please sign in or sign up</p>
      <div className="row">
        <div className="col-md-6" onClick={handleSignIn}>
          <div className="icon-container d-flex justify-content-center align-items-center" >
            <FontAwesomeIcon icon={faSignInAlt}  size="3x" border/>
            <span>Sign In</span>
          </div>
        </div>
        <div className="col-md-6" onClick={handleSignUp}>
          <div className="icon-container d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faUserPlus}  size="3x"  border/>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LandingPage;


