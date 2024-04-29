import React, { useState, useEffect } from "react";
import HeaderLoggedOut from "../../Layout/LoggedOut";
import { useLocation } from "react-router-dom";
import useVenueData from "../FetchData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApiKey from "../../Api/ApiKey";

function VenueDetailsNoUser() {
  const location = useLocation();
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    async function fetchBookedDates() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/bookings?venueId=${venueId}`, {
          headers: {
            "X-Noroff-API-Key": ApiKey,
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch booked dates');
        }

        const data = await response.json();
        const dates = data.data.map(booking => ({
          startDate: new Date(booking.dateFrom),
          endDate: new Date(booking.dateTo)
        }));
        setBookedDates(dates);
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    }

    if (venueId) {
      fetchBookedDates();
    }
  }, [venueId]);

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderLoggedOut />
      <h2>{venue.name} No user</h2>
      <p>Description: {venue.description}</p>
      <p>City: {venue.location.city}</p>
      <p>Rating: {venue.rating}</p>
      <p>NOK {venue.price}</p>
      <p>Max guests: {venue.maxGuests}</p>
      
      <div>
        <h3> logged out or manager</h3>
        <p>Select booking dates:</p>
        <DatePicker
          selected={new Date()}
          disabled
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          selected={new Date()}
          disabled
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <p>Number of guests:</p>
        <input
          type="number"
          value={1}
          disabled
        />
      </div>
      <p>Please log in or register to book this venue.</p>
    </div>
  );
}

export default VenueDetailsNoUser;
