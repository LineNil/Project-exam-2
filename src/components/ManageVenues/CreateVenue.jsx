import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiKey from "../Api/ApiKey";
import HeaderLoggedInManager from "../Layout/Manager";

function CreateVenue() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    maxGuests: 0,
    rating: 0,
    images: [], 
    meta: {
      wifi: true,
      parking: true,
      breakfast: true,
      pets: true
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      lat: 0,
      lng: 0
    }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const parsedValue = name === "price" || name === "maxGuests" ? (value.trim() !== '' && !isNaN(value) ? parseInt(value) : 0) : value;
    setFormData({
      ...formData,
      meta: {
        ...formData.meta,
        [name]: checked 
      },
      [name]: parsedValue
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
            body: JSON.stringify({
                ...formData,
                images: formData.images.map(imageUrl => ({ url: imageUrl })),
            })
        });
        if (!response.ok) {
            throw new Error("Failed to create venue");
        }
        const data = await response.json();
        console.log("Venue created successfully:", data);
        navigate(`/created-venue-success`);
    } catch (error) {
        console.error("Error creating venue:", error);
        // Håndter feil, f.eks. vis feilmelding til bruker
    }
};



  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    const updatedImages = [...formData.images, { url: value }];
    setFormData({
        ...formData,
        images: updatedImages 
    });
    console.log("Images Updated:", updatedImages);
};



  return (
    <div>
      <HeaderLoggedInManager />
      <h2>Create New Venue</h2>
      <form 
      onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} />
        </label>
        <br />
        <label>
          Max Guests:
          <input 
          type="number" 
          name="maxGuests" 
          value={formData.maxGuests} 
          onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input 
          type="text" 
          name="address" 
          value={formData.location.address} 
          onChange={handleLocationChange} />
        </label>
        <br />

        <label>
          Image URL:
          <input 
            type="text" 
            name="imageUrl" 
            value={formData.imageUrl} 
            onChange={handleImageUrlChange} />
        </label>
        <br />
        <label>
          City:
          <input 
          type="text" 
          name="city" 
          value={formData.location.city} 
          onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Zip:
          <input 
          type="text" 
          name="zip" 
          value={formData.location.zip} 
          onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Country:
          <input 
          type="text" 
          name="country" 
          value={formData.location.country} 
          onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          <input 
            type="checkbox" 
            name="wifi" 
            checked={formData.meta.wifi} 
            onChange={handleChange} />
          Wifi
        </label>

        <br />
        <label>
          <input 
            type="checkbox" 
            name="parking" 
            checked={formData.meta.parking} 
            onChange={handleChange} />
          Parking
        </label>
        <br />
        <label>
          <input 
            type="checkbox" 
            name="breakfast" 
            checked={formData.meta.breakfast} 
            onChange={handleChange} />
          Breakfast
        </label>
        <br />

        <button 
        type="submit"
        >Create Venue</button>
      </form>
    </div>
  );
}

export default CreateVenue;
