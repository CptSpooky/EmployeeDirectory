import React from 'react'

export default function Employee(props) { 
    const {
        name, 
        role
    } = props;
    return (
        <div className="">
            <div className="">
                <h3 className="">{name}</h3>
                <div>
                    <button className="">Edit</button>
                    <button className="">Delete</button>
                </div>
            </div>
            <div className="">
                <span className="">Role:</span>
                <span className="">{role}</span>
            </div>
        </div>
    )
}