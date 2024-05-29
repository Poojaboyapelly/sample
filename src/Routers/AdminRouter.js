import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AdminPage from '../components/AdminPage'; 

const AdminRouter = () => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="AdminPage" element={<AdminPage/>} />
  </Routes>
);

export default AdminRouter;
