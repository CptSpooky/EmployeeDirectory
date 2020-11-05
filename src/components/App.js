import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [employees, setEmployee] = useState(sampleEmployees)

  function handleEmployeeAdd(){
    const newEmployee = {
      id: uuidv4(),
      name: 'New',
      role: 1
    }
    setEmployee([...employees, newEmployee])
  }
  
  return (
    <EmployeeList 
      employees={employees}
      handleEmployeeAdd={handleEmployeeAdd}
    />
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