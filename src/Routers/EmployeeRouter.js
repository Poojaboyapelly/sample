import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../components/ems/components/Signin';
import SignUp from '../components/ems/components/Signup';
import LandingPage from '../components/ems/components/LandingPage';
import Dashboard2 from '../components/ems/components/Dashboard';
import EditEmployee from '../components/ems/components/EditEmployee';
import Home2 from '../components/ems/components/Home2';
import EmployeeForm from '../components/ems/components/EmployeeForm';
import { RequireAuth } from '../components/ems/components/RequireAuth';
import { AuthProvider } from '../components/ems/components/Auth';

function EmployeeRouter() {
    return (
        <div>
          <AuthProvider>
            <Routes>
                <Route path="employee/signin" element={<SignIn />} />
                <Route path="employee/signup" element={<SignUp />} />
                <Route path="" element={<LandingPage />} />
                <Route path="employees/:employeeId" element={<RequireAuth><EditEmployee /></RequireAuth>} />
                <Route path="employee/Dashboard" element={<RequireAuth><Dashboard2 /></RequireAuth>} />
                <Route path='Home' element={<Home2 /> }/>
                <Route path='CreateEmployee' element={<RequireAuth><EmployeeForm initialValues={{}} /></RequireAuth>} />
            </Routes>
       </AuthProvider>
        </div>
    )
}

export default EmployeeRouter
