import React, { useState } from "react";
import HeaderLoggedIn from "../../Layout/LoggedIn/User";
import { useLocation } from "react-router-dom";
import useVenueData from "../FetchData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VenueDetailsLoggedIn() {
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);

  const handleBookVenue = () => {
    // Handle booking logic
    console.log("Booking venue from", startDate, "to", endDate, "for", guests, "guests");
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderLoggedIn />
      <h2>{venue.name}</h2>
      <p>Description: {venue.description}</p>
      <p>City: {venue.location.city}</p>
      <p>Rating: {venue.rating}</p>
      <p>NOK {venue.price}</p>
      <div>
        <p>Select booking dates:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <p>Number of guests:</p>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          min={1}
        />
      </div>
      <button onClick={handleBookVenue}>Book Venue</button>
    </div>
  );
}

export default VenueDetailsLoggedIn;
