import React from "react";
import { Report } from "../ScreenComponents/Report";

export const ReportWall = ({ username }) => {
  return (
    <div>
      <h1 className="display-2 text-center mb-5 mt-5">
        {" "}
        Welcome back, {username}!
      </h1>

      <Report />
    </div>
  );
};
