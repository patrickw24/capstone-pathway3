import React from "react";
import { Report } from "../ScreenComponents/Report";
import { useState, useEffect } from "react";

export const ReportWall = ({ username }) => {

    const [message, setMessage] = useState("Employee Database")

    const welcomeMessage = ()=>{
      if(!username){
        setMessage(
          
            `Employee Database`
         
        )
      }else{
        setMessage(
          
            `Welcome back, ${username}!`
          
        )
      }
    }

    useEffect(() => {
      welcomeMessage()
    }, [username])
    
    console.log(message)

  return (
    <div>
      <p className="display-2 text-center mb-5 mt-5">
        {message}
      </p>

      <Report />
    </div>
  );
};
