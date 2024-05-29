import React from 'react';
import { Link } from 'react-router-dom';
import AdminRouter from '../Routers/AdminRouter';
import './AdminPortal.css';

const AdminPortal = () => (
  <div className="admin-portal">
    <h1>Admin Portal</h1>
    <nav className="nav flex-row">
      <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
      <Link className="nav-link" to="/admin/AdminPage">AdminPage</Link>
    </nav>
    <div className="portal-content">
      <AdminRouter />
    </div>
  </div>
);

export default AdminPortal;


