import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import { getEmployee , updateEmployee} from '../api/employeeApi';


const EditEmployee = () => {
 
  const { employeeId } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
        
          try {
            const employee = await getEmployee(employeeId);
            setEmployeeData(employee);
            console.log(employee);
          } catch (error) {
            console.error('Error fetching employee data:', error);
          }
        
      };
  
      fetchData();
    }, [employeeId]);


    
  
    const handleFormSubmit = async (updatedEmployee) => {
        try {
            //console.log('Submitting employee data:', updatedEmployee);
            await updateEmployee(employeeId, updatedEmployee);
            alert('Employee updated successfully!');
            navigate('/ems/Home'); 
        } catch (error) {
          console.error('Error submitting employee:', error);
          alert('An error occurred. Please try again later.');
        }
      };
 

  return (
    <div>
  
    <EmployeeForm
      initialValues={employeeData}
      onSubmit={handleFormSubmit}
    />
    </div>
  );
};

export default EditEmployee;