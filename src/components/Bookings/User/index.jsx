import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import HeaderLoggedIn from "../../Layout/User";

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const profileName = localStorage.getItem("loggedInUserName");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/profiles/${profileName}/bookings?_venue=true`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "X-Noroff-API-Key": ApiKey,
            },
          }
        );
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        if (Array.isArray(responseData.data)) {
          console.log("Response Data is an array.");
          setBookings(responseData.data);
        } else {
          console.error("Error: Response data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, [accessToken, profileName]);

  // Function to calculate total price based on venue price and number of days booked
  const calculateTotalPrice = (pricePerDay, dateFrom, dateTo) => {
    const start = new Date(dateFrom);
    const end = new Date(dateTo);
    const numberOfDays = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Calculate difference in days
    return pricePerDay * numberOfDays;
  };

  return (
    <div>
      <HeaderLoggedIn />
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>Booking ID: {booking.id}</p>
            <p>Check-in: {booking.dateFrom}</p>
            <p>Check-out: {booking.dateTo}</p>
            <p>Guests: {booking.guests}</p>
            {booking.venue && (
              <div>
                <p>Venue: {booking.venue.name}</p>
                <p>Price per day: NOK {booking.venue.price}</p>
                <p>Total price: NOK {calculateTotalPrice(booking.venue.price, booking.dateFrom, booking.dateTo)}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserBookings;
