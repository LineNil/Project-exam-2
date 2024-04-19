import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VenueListLoggedIn from "../VenueList/LoggedIn";
import VenueListLoggedOut from "../VenueList/LoggedOut";
import LogIn from "../Login";
import Register from "../Register";
import UserAccount from "../UserAccount";
import ManagerAccount from "../ManagerAccount";
import VenueDetailsLoggedInUser from "../Venue/User";
import UserBookings from "../Bookings/User";
import BookingSuccess from "../Bookings/User/success";
import MyVenues from "../Bookings/Manager";
import CreateVenue from "../ManageVenues/CreateVenue";

function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>

          <Route path="/venue-list-loggedin" element={<VenueListLoggedIn />} />
          <Route path="/" element={<VenueListLoggedOut />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/manager" element={<ManagerAccount />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/venue-details/:id" element={<VenueDetailsLoggedInUser />} />
          <Route path="/user-bookings" element={<UserBookings />} />
          <Route path="/booking-success" element={<BookingSuccess/>}/>
          <Route path="/my-venues" element={<MyVenues />} />
          
          <Route path="/create-venue" element={<CreateVenue />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
