import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "../Login";
import Register from "../Register";

//user
import VenueListLoggedIn from "../VenueList/User";
import UserBookings from "../Accounts/User/bookings";
import UserAccount from "../Accounts/User/index";
import VenueDetailsLoggedInUser from "../Venue/User";
import BookingSuccess from "../Accounts/User/bookings/success";

//manager
import VenueListManager from "../VenueList/Manager";
import CreateVenue from "../ManageVenues/CreateVenue";
import CreatedVenueSuccess from "../ManageVenues/createsuccess";
import UpdateVenueSuccess from "../ManageVenues/updateSuccess";
import VenueUpdate from "../ManageVenues/VenueUpdate";
import ManagerAccount from "../Accounts/Manager";
import VenueDetailsManager from "../Venue/Manager";
import MyVenues from "../Accounts/Manager/venues";
import BookingSuccessManager from "../Accounts/Manager/Booking/success";


//no user
import VenueListLoggedOut from "../VenueList/NoUser";
import VenueDetailsNoUser from "../Venue/NoUser";

import { BodyStyle } from "./style";


function App(){
  return(
    <BodyStyle>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/" element={<VenueListLoggedOut />} />
            <Route path="/venue-list-loggedin" element={<VenueListLoggedIn />} />
            <Route path="/venue-list-manager" element={<VenueListManager />} />
            <Route path="/venue-details-no-user/:id" element={<VenueDetailsNoUser />} />
            <Route path="/venue-details-manager/:id" element={<VenueDetailsManager />} />
            <Route path="/venue-details/:id" element={<VenueDetailsLoggedInUser />} />
            <Route path="/manager" element={<ManagerAccount />} />
            <Route path="/user-account" element={<UserAccount />} />
            <Route path="/user-bookings" element={<UserBookings />} />
            <Route path="/booking-success" element={<BookingSuccess/>}/>
            <Route path="/booking-success-manager" element={<BookingSuccessManager/>}/>
            <Route path="/my-venues" element={<MyVenues />} />
            <Route path="/create-venue" element={<CreateVenue />} />
            <Route path="/created-venue-success" element={<CreatedVenueSuccess />} />
            <Route path="/update-venue-success" element={<UpdateVenueSuccess/>} />
            <Route path="/venue-update/:venueId" element={<VenueUpdate />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BodyStyle>
  );
}

export default App;