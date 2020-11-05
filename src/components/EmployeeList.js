import React, { useContext } from 'react'
import Employee from './Employee'
import { EmployeeContext } from './App'

export default function EmployeeList({ employees }) {
    const { handleEmployeeAdd } = useContext(EmployeeContext);
    return (
        <div className="">
            <div>
                {employees.map(data => {
                    return (
                        <Employee key={data.id} {...data}/>
                    )
                })}
            </div>
            <div className="">
                <button className="" onClick={handleEmployeeAdd}>
                    Add Employee
                </button>
            </div>
        </div>
    )
}