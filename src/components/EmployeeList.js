import React from 'react'
import Employee from './Employee'

export default function EmployeeList({ employees, handleEmployeeAdd }) {
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