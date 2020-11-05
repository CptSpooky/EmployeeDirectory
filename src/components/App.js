import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'employeeDirectory.employees'


function App() {
  const [employees, setEmployee] = useState(sampleEmployees)

  //load from local storage
  useEffect(()=>{
    const employeeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (employeeJSON != null) setEmployee(JSON.parse(employeeJSON))
  }, [])

  //save to local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees))
  }, [employees])

  const employeeContextValue = {
    handleEmployeeAdd,
    handleEmployeeDelete
  }

  function handleEmployeeAdd(){
    const newEmployee = {
      id: uuidv4(),
      name: 'New',
      role: 1
    }
    setEmployee([...employees, newEmployee])
  }

  function handleEmployeeDelete(id){
    setEmployee(employees.filter(employee => employee.id !== id))
  }
  
  return (
    <EmployeeContext.Provider value={employeeContextValue}>
      <EmployeeList employees={employees}/>
    </EmployeeContext.Provider>
  )
}

const sampleEmployees = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Engineer'
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Programmer'
  },
  {
    id: 3,
    name: 'Niomi Gentz',
    role: 'Accountant'
  },
  {
    id: 4,
    name: 'Asher Velasquez',
    role: 'Manager'
  },
  {
    id: 5,
    name: 'Cira Sudapoya',
    role: 'Designer'
  },
  {
    id: 6,
    name: 'Yuki Kinoshita',
    role: 'IT'
  },

]

export default App;