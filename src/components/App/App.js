import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VenueListLoggedIn from "../VenueList/LoggedIn";
import VenueListLoggedOut from "../VenueList/LoggedOut";
import LogIn from "../Login";
import Register from "../Register";
import UserAccount from "../Accounts/User";
import ManagerAccount from "../Accounts/Manager";
import VenueDetailsLoggedInUser from "../Venue/User";
import UserBookings from "../Bookings/User";
import BookingSuccess from "../Bookings/User/success";
import MyVenues from "../ManageVenues/venues";
import CreateVenue from "../ManageVenues/createVenue";
import VenueListLoggedInManager from "../VenueList/LoggedIn/Manager";
import CreatedVenueSuccess from "../ManageVenues/createsuccess";
import VenueInfoManager from "../ManageVenues/Venueinfo";


function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>

          <Route path="/venue-list-loggedin" element={<VenueListLoggedIn />} />
          <Route path="/venue-list-loggedin-manager" element={<VenueListLoggedInManager />} />

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
          <Route path="/created-venue-success" element={<CreatedVenueSuccess />} />
          <Route path="/venue-info-manager/:venueId" element={<VenueInfoManager />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
