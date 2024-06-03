import React from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const Navbar = () => {

  const { employeeId } = useParams();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       const employeeId = localStorage.getItem('employeeId'); 
      const response = await fetch('http://localhost:3000/api/employees/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employeeId })
      });
      const responseData = await response.json();
if (response.ok) {
  if (responseData.message === "Logout successful") {
    localStorage.removeItem("key");
    localStorage.removeItem("employeeId");
    navigate('/ems/employee/signin');
  } else {
    console.error('Logout failed:', responseData.message);
  }
} else {
  console.error('Logout failed:', response.statusText);
}

    } catch (error) {
      console.error('Logout error:', error);
     
    }
  };

  return (

    localStorage.getItem('employeeId') ?
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
        <Link className="navbar-brand" to="/ems/employee/Dashboard">Dashboard</Link> 

          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
           
            <li className="nav-item"> 
              <Link className="navbar-brand" to={`/ems/CreateEmployee`}>Create Employee</Link> 
            </li>
          </ul>
          <Button className="btn btn-outline" onClick={handleLogout}>Logout</Button>
        </div>
    </nav>
    :
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     <Link className="navbar-brand" to="/ems/employee/Dashboard">Dashboard</Link> 

       <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
         <li className="nav-item"> 
           <Link className="navbar-brand" to={`/ems/employee/signin`}>Sign In</Link> 
         </li>
         <li className="nav-item"> 
           <Link className="navbar-brand" to={`/ems/employee/signup`}>Sign Up</Link>
         </li>
         <li className="nav-item"> 
           <Link className="navbar-brand" to={`/ems/CreateEmployee`}>Create Employee</Link> 
         </li>
       </ul>
   
     </div>
 </nav>
 </>

  );
};

export default Navbar;