import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import EmployeeForm from './EmployeeForm';
import Navbar from './Navbar';
import Header from './Header';
import EditEmployee from './EditEmployee';

const Home2 = () => {

  return (
    <div>
      <Header />

      <Navbar />

      <Routes>
        <Route path="/ems/employee/Dashboard" element={<Dashboard />} />
        <Route path="/ems/employees" element={<EmployeeForm initialValues={{}} />} />
        <Route path="/ems/employees/:employeeId" element={   <EditEmployee /> } />
      </Routes>
    </div>
  );
};

export default Home2;