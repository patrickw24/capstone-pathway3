import React from "react";
import { useState } from "react";

export const Form = () => {
  const url = import.meta.env.VITE_URL;
  const token = import.meta.env.VITE_TOKEN;

  const [employeeName, setemployeeName] = useState("")
  const [employeePostion, setEmployeePostion] = useState("")
  const [employeeDepartment, setEmployeeDepartment] = useState("")
  const [employeeDate, setEmployeeDate] = useState("")
  const [message, setMessage] = useState("")
  

  const nameChange = (event) => {
    setemployeeName(event.target.value)
  };

  const namePostion = (event) => {
    setEmployeePostion(event.target.value)
  };

  const nameDepartment = (event) => {
    setEmployeeDepartment(event.target.value)
  };

  const nameHireDate = (event) => {
    setEmployeeDate(event.target.value)
  };

  const submitHandler = async () => {
    event.preventDefault();

    let tmp = {
      name: employeeName,
      position: employeePostion,
      department: employeeDepartment,
      hire_date: employeeDate,
    };

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "apikey": token,
        "Authorization": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tmp),
    });
    
    if (response.ok) {
      console.log("element created")
      setemployeeName("");
      setEmployeePostion("");
      setEmployeeDepartment("");
      setEmployeeDate("");
      setMessage(
        <h1>
        Your employee has been added! Click the following link to view the updated employee database: <a href="#/report"> Click Here </a>
        </h1>
      )
      
    } else {
      let err = await response.json();
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input onChange={nameChange} type="text" className="form-control" value={employeeName} />
          </div>
          <div className="mb-3">
            <label className="form-label">Postion</label>
            <input
              onChange={namePostion}
              type="text"
              className="form-control"
              value={employeePostion}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              onChange={nameDepartment}
              type="text"
              className="form-control"
              value={employeeDepartment}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Hire Date</label>
            <input
              onChange={nameHireDate}
              type="date"
              className="form-control"
              value={employeeDate}
            />
          </div>
          <button className="btn btn-success w-100" type="submit">
            Add Employee
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};
