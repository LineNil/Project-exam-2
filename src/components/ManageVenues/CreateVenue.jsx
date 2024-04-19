import React, { useState } from "react";
import ApiKey from "../Api/ApiKey";

function CreateVenue() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0, // Endret til 0 som standardverdi
    maxGuests: 0, // Endret til 0 som standardverdi
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "maxGuests" ? parseInt(value) : value
    });
    console.log("Form Data Updated:", formData);
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value
      }
    });
    console.log("Location Data Updated:", formData.location);
  };

  const handleSubmit = async (e) => {
    const accessToken = localStorage.getItem("accessToken");
    e.preventDefault();
    try {
      const response = await fetch("https://v2.api.noroff.dev/holidaze/venues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": ApiKey,
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to create venue");
      }
      const data = await response.json();
      console.log("Venue created successfully:", data);
      // Handle success, e.g., redirect to another page
    } catch (error) {
      console.error("Error creating venue:", error);
      // Handle error, e.g., display error message to user
    }
  };

  return (
    <div>
      <h2>Create New Venue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Max Guests:
          <input type="number" name="maxGuests" value={formData.maxGuests} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.location.address} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.location.city} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Zip:
          <input type="text" name="zip" value={formData.location.zip} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={formData.location.country} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Continent:
          <input type="text" name="continent" value={formData.location.continent} onChange={handleLocationChange} />
        </label>
        <br />
        {/* Add more fields for other properties */}
        <button type="submit">Create Venue</button>
      </form>
    </div>
  );
}

export default CreateVenue;
