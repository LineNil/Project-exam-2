import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import VenueList from "../VenueList";
import LogIn from "../Login";
import Register from "../Register";
import UserPage from "../UserPage";
import ManagerPage from "../ManagerPage";

function App(){
  return(
    <BrowserRouter>
        <div>
      <Layout>
        <Routes>
        <Route path="/" element={<VenueList/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/user" element= {<UserPage/>} />
        <Route path="/manager" element={<ManagerPage />} />
        </Routes>
        
      </Layout>
    </div>
    </BrowserRouter>

  );
}

export default App;