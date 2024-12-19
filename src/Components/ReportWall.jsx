import React from "react";
import { Report } from "../ScreenComponents/Report";
import { useState, useEffect } from "react";

export const ReportWall = () => {

    const [message, setMessage] = useState("username")

    useEffect(() => {
      let user = localStorage.getItem("username")
      

      if(!user){
        setMessage(
          
            `Employee Database`
         
        )
      }else{
        setMessage(
          
            `Welcome back, ${user}!`
          
        )
      }

    }, [])
    
    

  return (
    <div>
      <p className="display-2 text-center mb-5 mt-5">
        {message}
      </p>

      <Report />
    </div>
  );
};
