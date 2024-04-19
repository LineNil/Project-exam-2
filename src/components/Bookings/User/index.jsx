import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import HeaderLoggedIn from "../../Layout/User";

function UserBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await fetch("https://v2.api.noroff.dev/holidaze/bookings", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-Noroff-API-Key": ApiKey,
          },
        });
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
  }, []);

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

          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserBookings;
