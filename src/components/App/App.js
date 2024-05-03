import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VenueListLoggedIn from "../VenueList/User";
import VenueListLoggedOut from "../VenueList/NoUser";
import LogIn from "../Login";
import Register from "../Register";
import UserAccount from "../Accounts/User";
import ManagerAccount from "../Accounts/Manager";
import VenueDetailsLoggedInUser from "../Venue/User";
import UserBookings from "../Bookings/User";
import BookingSuccess from "../Bookings/User/success";
import MyVenues from "../Accounts/Manager/venues";
import CreateVenue from "../ManageVenues/createVenue";
import VenueListManager from "../VenueList/Manager";
import CreatedVenueSuccess from "../ManageVenues/createsuccess";
import VenueInfoManager from "../ManageVenues/Venueinfo";
import { BodyStyle } from "./style";
import VenueDetailsNoUser from "../Venue/NoUser";
import VenueDetailsManager from "../Venue/Manager";

function App(){
  return(
    <BodyStyle>
 <BrowserRouter>
      <div>
        <Routes>

          <Route path="/venue-list-loggedin" element={<VenueListLoggedIn />} />
          <Route path="/venue-list-manager" element={<VenueListManager />} />
          <Route path="/venue-details-no-user/:id" element={<VenueDetailsNoUser />} />
          <Route path="/venue-details-manager/:id" element={<VenueDetailsManager />} />
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
    </BodyStyle>
   
  );
}

export default App;
