import React, { useState, useEffect } from "react";
import ApiKey from "../Api/ApiKey";
import HeaderLoggedInManager from "../Layout/Manager";
import { Link } from "react-router-dom";

function MyVenues() {
  const [venues, setVenues] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const profileName = localStorage.getItem("loggedInUserName");

  useEffect(() => {
    async function fetchUserVenues() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/profiles/${profileName}/venues?_bookings=true`,
          {
            method: "GET",
            headers: {
              "X-Noroff-API-Key": ApiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user's venues");
        }

        const data = await response.json();
        console.log("User venues data:", data); // Sjekk om dataene returneres
        if (data && data.data) {
          setVenues(data.data);
        } else {
          console.log("User has no venues.");
          setVenues([]); // Tilbakestill venues til en tom array
        }
      } catch (error) {
        console.error("Error fetching user's venues:", error);
      }
    }

    fetchUserVenues();
  }, [accessToken, profileName]);

  return (
    <div>
      <HeaderLoggedInManager />
      <h2>My Venues</h2>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>
            <p>Name: {venue.name}</p>
            <p>Description: {venue.description}</p>
            <p>Bookings:</p>
            <ul>
              {venue.bookings &&
                venue.bookings.map((booking) => (
                  <li key={booking.id}>
                    <p>User: {booking.customer.name}</p>
                    <p>From: {booking.dateFrom}</p>
                    <p>To: {booking.dateTo}</p>
                  </li>
                ))}
            </ul>
            <Link to={`/venue-info-manager/${venue.id}`}>
              <button>Manage</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyVenues;
