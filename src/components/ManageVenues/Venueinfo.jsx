// VenueInfoManager.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApiKey from "../Api/ApiKey";
import HeaderLoggedInManager from "../Layout/Manager";
import deleteVenue from "../ManageVenues/deleteVenue";
import updateVenue from "../ManageVenues/updateVenue";

function VenueInfoManager() {
  const { venueId } = useParams();
  const [venue, setVenue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    maxGuests: 0,
    rating: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
      lat: 0,
      lng: 0
    }
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVenue() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/venues/${venueId}`,
          {
            method: "GET",
            headers: {
              "X-Noroff-API-Key": ApiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch venue");
        }

        const data = await response.json();
        setVenue(data.data);
        setFormData(data.data); // Populate form data with venue details
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    }

    if (venueId) {
      fetchVenue();
    }
  }, [venueId]);

  const handleDeleteVenue = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const success = await deleteVenue(venueId, accessToken);

      if (success) {
        navigate("/my-venues");
      }
    } catch (error) {
      console.error("Error deleting venue:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");
      await updateVenue(venueId, formData, accessToken);
      setVenue(formData); // Update venue state with new data
      setShowUpdateForm(false); // Hide the update form after submission
    } catch (error) {
      console.error("Error updating venue:", error);
    }
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderLoggedInManager />
      <h2>{venue.name}</h2>
      <p>Description: {venue.description}</p>
      {showUpdateForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Max Guests:
            <input
              type="number"
              name="maxGuests"
              value={formData.maxGuests}
              onChange={handleChange}
            />
          </label>
          {/* Add more fields as needed */}
          <button type="submit">Update</button>
          <button onClick={() => setShowUpdateForm(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowUpdateForm(true)}>Update</button>
      )}
      <button onClick={handleDeleteVenue}>Delete</button>
    </div>
  );
}

export default VenueInfoManager;
