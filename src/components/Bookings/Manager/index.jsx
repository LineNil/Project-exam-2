import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import HeaderLoggedInManager from "../../Layout/Manager";
import { Link } from "react-router-dom";

function MyVenues() {
  const [venues, setVenues] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const profileName = localStorage.getItem("loggedInUserName");

  useEffect(() => {
    async function fetchUserVenues() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/profiles/${profileName}/venues`,
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
        console.log("User venues data:", data); // Check if data is returned
        if (data && data.data) {
          setVenues(data.data);
        } else {
          console.log("User has no venues.");
          setVenues([]); // Reset venues to an empty array
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
