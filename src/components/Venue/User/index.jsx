import React, { useState, useEffect } from "react";
import HeaderLoggedIn from "../../Layout/User";
import { useLocation, useNavigate } from "react-router-dom";
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
    throw new Error("Failed to create booking");
  }
}

function VenueDetailsLoggedInUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState(null);
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

  const handleBookVenue = async () => {
    try {
      await createBooking(startDate, endDate, guests, venueId);
      console.log("Booking created successfully!");
      navigateToBookingSuccess(); 
    } catch (error) {

      console.error("Booking failed:", error);
      setError(error.message);
    }
  };

  const navigateToBookingSuccess = () => {
    console.log("Navigating to booking success page...");
    navigate("/booking-success");
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderLoggedIn />

      <h2>{venue.name} User</h2>
      <p>Description: {venue.description}</p>
      <p>City: {venue.location.city}</p>
      <p>Rating: {venue.rating}</p>
      <p>NOK {venue.price}</p>
      <p>Max guests: {venue.maxGuests}</p>
      
      <div>
        <h3>User page</h3>
        <p>Select booking dates:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          excludeDates={bookedDates.map(booking => booking.startDate)}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
          excludeDates={bookedDates.map(booking => booking.endDate)}
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default VenueDetailsLoggedInUser;
