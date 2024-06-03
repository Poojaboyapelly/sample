import React, { useState, useEffect } from 'react';
import { getTable, deleteEmployee,getEmployee } from '../api/employeeApi'; 
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    showTable();
  }, []);

  const showTable = async () => {
    try {
      const employeesData = await getTable();
   
      setEmployees(employeesData);
      
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  const navigate = useNavigate();

  const handleEdit = async (employeeId) => {
    try {
     // Refetch employee data from API
      const employeeData = await getEmployee(employeeId);
      console.log('employeeData',employeeData);
      // Navigate to the edit form, passing the employee data
      navigate(`/ems/employee/${employeeId}`, { state: employeeData });
    } catch (error) {
      console.error('Error fetching employee data:', error);
      alert('Error fetching employee data. Please try again.');
    }
  };


  const handleDelete = async (employeeId) => {
    try {
        await deleteEmployee(employeeId);
        await showTable(); 
    
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
      
    }
  };

  return (
    
   
    <div>
      <Navbar/>
      <h2 >Employee list</h2>
      <Table striped bordered hover variant="light" size="sm">
        <thead>
          <tr>
          <th scope="col">Employee ID</th>
          <th scope="col">Employee Name</th>
          <th scope="col">Department</th>
          <th scope="col">DOB</th>
          <th scope="col">Is Active</th>
          <th scope="col">Employment Type</th>
          <th scope="col">Role</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.employeename}</td>
              <td>{employee.department}</td>
              <td>{employee.dob}</td>
              <td>{employee.isActive ? 'Yes' : 'No'}</td>
              <td>{employee.employmentType}</td>
              <td>{employee.role}</td>
              <td>
                <Button onClick={() => handleEdit(employee.employeeId)}>
                <i className="far fa-edit"></i> Edit
                </Button>
                </td>
                <td>
                <Button onClick={() => handleDelete(employee.employeeId)}>
                  <i className="far fa-trash-alt"></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
  );
};

export default Dashboard;

