import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = React.createContext()

function App() {
  const [employees, setEmployee] = useState(sampleEmployees)

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