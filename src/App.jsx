import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { LoginWall } from "./Components/LoginWall";

import { ReportWall } from "./Components/ReportWall";
import { NavBar } from "./ScreenComponents/Navbar";
import { AddEmployee } from "./Components/AddEmployee";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginWall />} />
          <Route
            path="/report"
            element={<ReportWall />}
          />
          <Route path="/form" element={<AddEmployee />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
