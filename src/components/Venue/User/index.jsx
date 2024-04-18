import React, { useState } from "react";
import HeaderLoggedIn from "../../Layout/User";
import { useLocation } from "react-router-dom";
import useVenueData from "../FetchData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApiKey from "../../Api/ApiKey";



async function createBooking(startDate, endDate, guests, venueId) {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch("https://v2.api.noroff.dev/holidaze/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": ApiKey,
      },
      body: JSON.stringify({
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: guests,
        venueId: venueId
      })
    });

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
}

function VenueDetailsLoggedInUser() {
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);

  const handleBookVenue = async () => {
    try {
      await createBooking(startDate, endDate, guests, venueId);
      console.log("Booking created successfully!");
      // Handle success scenario, e.g., redirect to a confirmation page
    } catch (error) {
      // Handle error scenario, e.g., display an error message to the user
    }
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

export default VenueDetailsLoggedInUser;
