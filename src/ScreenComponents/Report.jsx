import React from "react";
import { useState, useEffect } from "react";

export const Report = () => {
  const [posts, setPosts] = useState([]);
  const url = import.meta.env.VITE_URL;
  const token = import.meta.env.VITE_TOKEN;

  const getEmployees = async () => {


    let newURL = `${url}?order=name.asc`
    let response = await fetch(newURL, {
      method: "GET",
      headers: {
        apikey: token,
        Authorization: token,
      },
    });

    if (response.ok) {
      let data = await response.json();
      setPosts(data);
      console.log(data);
    }
  };

  const deleteEmployee = async(id)=>{

    let newUrl = `${url}?id=eq.${id}`

    let response = await fetch(newUrl,{
      method:'DELETE',
      headers:{
        'apikey': token,
        'Authorization': token,
      }
    })
    if(response.ok){
      console.log("Object deleted")
      getEmployees()
    }else{
      let err = await response.json()
      console.log(err)
    }
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="row">
            {posts.map((item) => (
              <div key= {item.id} className="col-sm-3">
                <div className="card text-center mb-3 mr-3">
                  <div className="card-header">{item.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">{item.position}</h5>
                    <p className="card-text">Department: {item.department}</p>
                    <p>Hire Date: {item.hire_date}</p>
                  </div>
                  <div className="card-footer text-body-secondary">
                    Patrick and Co. 
                  </div>
                  <div>
                  <button onClick={() => deleteEmployee(item.id)} className="btn btn-danger w-100">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
