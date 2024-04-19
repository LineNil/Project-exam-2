import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VenueListLoggedIn from "../VenueList/LoggedIn";
import VenueListLoggedOut from "../VenueList/LoggedOut";
import LogIn from "../Login";
import Register from "../Register";
import UserAccount from "../UserAccount";
import ManagerPage from "../ManagerPage";
import VenueDetailsLoggedInUser from "../Venue/User";
import UserBookings from "../Bookings/User";
import BookingSuccess from "../Bookings/User/success";

function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/venue-list-loggedin" element={<VenueListLoggedIn />} />
          <Route path="/venue-list-loggedout" element={<VenueListLoggedOut />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/venue-details/:id" element={<VenueDetailsLoggedInUser />} />
          <Route path="/user-bookings" element={<UserBookings />} />
          <Route path="/booking-success" element={<BookingSuccess/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
