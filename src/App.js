import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPortal from './Portals/AdminPortal';
import UserPortal from './Portals/UserPortal';
import Home from './components/Home';
import { TodoWrapper } from '../src/components/todo/TodoWrapper'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeePortal from './Portals/EmployeePortal';


const App = () => (

  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Sample App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/home">User Portal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">Admin Portal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">Todo App</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ems">EMS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" element={<UserPortal />} />
          <Route path="/admin/*" element={<AdminPortal />} />
          <Route path="/todo" element={<TodoWrapper />} />
          <Route path='/ems/*' element={<EmployeePortal />} />

        </Routes>

      </div>
    </div>
  </Router>




);

export default App;
