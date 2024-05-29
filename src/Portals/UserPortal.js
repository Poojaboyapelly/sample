import React from 'react';
import { Link } from 'react-router-dom';
import UserRouter from '../Routers/UserRouter';
import './UserPortal.css';

const UserPortal = () => (
  <div className="user-portal">
    <h1>User Portal</h1>
    <nav className="nav flex-row">
      <Link className="nav-link" to="/user/home">Home</Link>
      <Link className="nav-link" to="/user/dashboard">Dashboard</Link>
    </nav>
    <div className="portal-content">
      <UserRouter />
    </div>
  </div>
);

export default UserPortal;
