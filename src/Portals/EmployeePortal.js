import React from 'react';
import EmployeeRouter from '../Routers/EmployeeRouter';
import { Link } from 'react-router-dom';

function EmployeePortal() {
  return (
 
        <div className="employee-portal">
    <h1>Employee Portal</h1>
    <nav className="nav flex-row">
      <Link className="nav-link" to="/ems/employee/signin">SignIn</Link>
      <Link className="nav-link" to="/ems/employee/signup">SignUp</Link>
      <Link className="nav-link" to="/ems/">LandingPage</Link>
      <Link className="nav-link" to="/ems/employees/:employeeId">EditEmployee</Link>
      <Link className="nav-link" to="/ems/employee/Dashboard">Dashboard</Link>
      <Link className="nav-link" to="/ems/Home">Home</Link>
      <Link className="nav-link" to="/ems/CreateEmployee">CreateEmployee</Link>
    </nav>
    <div className="portal-content">
      <EmployeeRouter />
    </div>
  </div>

  )
}

export default EmployeePortal
