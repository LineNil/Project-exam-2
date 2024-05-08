import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiKey from "../Api/ApiKey";
import HeaderLoggedInManager from "../Layout/Manager";
import { CreateVenueForm, Heading, CheckBox, LabelCheckbox, InputName, TextArea, Input, Label,  RightContainer, LeftContainer, ButtonContainer, SubmittButton } from "./CreateStyle";

function CreateVenue() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    maxGuests: 0,
    rating: 0,
    media: [], 
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
                "Access-Control-Allow-Origin": '*'
            },
            body: JSON.stringify(formData)
        });
        console.log({response})
        if (!response.ok) {
            throw new Error("Failed to create venue");
        }
        const data = await response.json();
        console.log("Venue created successfully:", data);
        navigate(`/created-venue-success`);
    } catch (error) {
        console.error("Error creating venue:", error);
        // Handle errors, e.g., display error message to user
    }
};

const handleImageUrlChange = (e) => {
    const { value } = e.target;
    const updatedImages = [...formData.media, { url: value }];
    setFormData({
        ...formData,
        media: updatedImages 
    });
    console.log("Images Updated:", updatedImages);
};

return (
  <div>
    <HeaderLoggedInManager />

    <Heading>Create New Venue</Heading>
    <CreateVenueForm
      onSubmit={handleSubmit}>

        <LeftContainer>
      <Label>
      <InputName>
Name
        </InputName>
        <Input 
          type="text" 
          name="name" 
          placeholder="Lake Cabin"

          value={formData.name} 
          onChange={handleChange} />
      </Label>
      <Label>
      <InputName>
City        </InputName>
        <Input 
          type="text" 
          name="city" 
          placeholder="Oslo"
          value={formData.location.city} 
          onChange={handleLocationChange} />
      </Label>
      <Label>
        <InputName>
        Image:
        </InputName>
        <Input 
          type="text" 
          name="imageUrl" 
          value={formData.imageUrl} 
          onChange={handleImageUrlChange} />
      </Label>
      <Label>
      <InputName>
Description        </InputName>
        <TextArea  
          name="description" 
          placeholder="Write something about the venue..."

          value={formData.description} 
          onChange={handleChange} />
      </Label>
      <Label>
      <InputName>
Price NOK       </InputName>        <Input 
          type="number" 
          name="price" 
          placeholder="100"

          value={formData.price} 
          onChange={handleChange} />
      </Label>









</LeftContainer>






<RightContainer>
<Label>
<InputName>Address        </InputName>        
<Input 
          type="text" 
          name="address" 
          placeholder="12 Maple Road"

          value={formData.location.address} 
          onChange={handleLocationChange} />
      </Label>
      <Label>
      <InputName>Zip</InputName>        
<Input 
          type="text" 
          name="zip" 
          placeholder="95586"
          value={formData.location.zip} 
          onChange={handleLocationChange} />
      </Label>
<Label>
<InputName>Country</InputName>              
<Input 
          type="text" 
          name="country" 
          placeholder="Norway"

          value={formData.location.country} 
          onChange={handleLocationChange} />
      </Label>
      <Label>
      <InputName>Max guests</InputName>              <Input 
          type="number" 
          name="maxGuests" 
          placeholder="5"
          value={formData.maxGuests} 
          onChange={handleChange} />
      </Label>



      <LabelCheckbox >
        <CheckBox  
          type="checkbox" 
          name="wifi" 
          checked={formData.meta.wifi} 
          onChange={handleChange} />
      <InputName>Wifi</InputName>            </LabelCheckbox >
      <LabelCheckbox >
        <CheckBox  
          type="checkbox" 
          name="pets" 
          checked={formData.meta.pets} 
          onChange={handleChange} />
      <InputName>Pets</InputName>            </LabelCheckbox >
      <LabelCheckbox >
        <CheckBox  
          type="checkbox" 
          name="parking" 
          checked={formData.meta.parking} 
          onChange={handleChange} />
      <InputName>Parking</InputName>            </LabelCheckbox >
      <LabelCheckbox >
        <CheckBox  
          type="checkbox" 
          name="breakfast" 
          checked={formData.meta.breakfast} 
          onChange={handleChange} />
              <InputName>Breakfast</InputName>      
      </LabelCheckbox >



</RightContainer>



<ButtonContainer>
<SubmittButton 
  type="submit">
  Create Venue
</SubmittButton>
</ButtonContainer>

  </CreateVenueForm>
  </div>
);
}

export default CreateVenue;
