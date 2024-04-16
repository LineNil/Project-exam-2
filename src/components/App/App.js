import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VenueList from "../VenueList";
import LogIn from "../Login";
import Register from "../Register";
import UserAccount from "../UserAccount";
import ManagerPage from "../ManagerPage";

function App(){
  return(
    <BrowserRouter>
      <div>

          <Routes>
            <Route path="/" element={<VenueList/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} /> 
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/user-account" element={<UserAccount />} />
          </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
