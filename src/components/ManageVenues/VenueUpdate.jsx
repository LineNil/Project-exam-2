import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApiKey from "../Api/ApiKey";
import HeaderLoggedInManager from "../Layout/Manager";
import updateVenue from "./updatePUT";
import Footer from "../Layout/Footer/index";
import {
  CreateVenueForm,
  Heading,
  CheckBox,
  LabelCheckbox,
  InputName,
  TextArea,
  Input,
  Label,
  RightContainer,
  LeftContainer,
  ButtonContainer,
  SubmitButton,
  ErrorMessage,
  CancelButton // Legg til ErrorMessage-komponenten
} from "./CreateStyle";


function VenueUpdate() {
  const { venueId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    maxGuests: 0,
    rating: 0,
    media: [],
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
      continent: "",
      lat: 0,
      lng: 0
    }
  });
  const [error, setError] = useState(""); // Legg til tilstand for feilmeldinger
  const [errors, setErrors] = useState({}); // Legg til tilstand for valideringsfeil
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
        setFormData(data.data); // Populate form data with venue details
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    }

    if (venueId) {
      fetchVenue();
    }
  }, [venueId]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const parsedValue =
      name === "price" || name === "maxGuests" || name === "rating"
        ? value.trim() !== "" && !isNaN(value)
          ? parseInt(value)
          : 0
        : value;

        if (name === "imageUrl") {
          setFormData({
            ...formData,
            media: [{url: value}]
          });
        }else {
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
        }


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

  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    const isValidUrl = validateUrl(value); // Valider URL-en
    setErrors({ ...errors, imageUrl: isValidUrl ? "" : "Invalid URL" }); // Sett feilmelding basert på gyldighet av URL
    if (isValidUrl) {
      setFormData({
        ...formData,
        media: [{ url: value }]
      });
    }
  };
  
  const validateUrl = (url) => {
    // Enkel validering av URL ved å bruke en regex
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };


  const handleSubmit = async (e) => {
    const accessToken = localStorage.getItem("accessToken");
    e.preventDefault();
    try {
      const validationErrors = validateFormData(formData); // Valider dataene før du sender dem til serveren
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors); // Sett valideringsfeilene
        return; // Avbryt innsendingen hvis det er valideringsfeil
      }

      const response = await updateVenue(venueId, formData, accessToken);
      console.log({ response });
      if (!response) {
        throw new Error("Failed to update venue");
      }
      console.log("Venue updated successfully:", response);
      navigate(`/update-venue-success`);
      // Naviger til suksesssiden eller gjør noe annet ved vellykket oppdatering
    } catch (error) {
      console.error("Error updating venue:", error);
      setError(error.message); // Sett feilmelding
    }
  };

  // Valideringsfunksjon for skjemaet
  const validateFormData = (data) => {
    const errors = {};
    if (data.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (data.description.length < 3) {
      errors.description = "Description must be at least 3 characters";
    }
    if (data.price <= 0) {
      errors.price = "Price must be greater than 0";
    }
    if (data.maxGuests <= 0) {
      errors.maxGuests = "Max guests must be greater than 0";
    }
    if (data.maxGuests > 100) {
      errors.maxGuests = "A venue cannot accommodate more than 100 guests";
    }
    if (data.rating > 5) {
      errors.rating = "Rating cannot be greater than 5";
    }
    const imageUrl = data.media[0]?.url;
    const isValidUrl = validateUrl(imageUrl);
    if (!isValidUrl) {
      errors.imageUrl = "Invalid URL";
    } else if (imageUrl && imageUrl.length > 300) {
      errors.imageUrl = "URL cannot be longer than 300 characters";
    }
    return errors;
  };

  return (
    <div>
      <HeaderLoggedInManager />

      <Heading>Update Venue</Heading>
      <CreateVenueForm onSubmit={handleSubmit}>
        <LeftContainer>
          <Label>
            <InputName>Name</InputName>
            <Input
              type="text"
              name="name"
              placeholder="Lake Cabin"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </Label>
          <Label>
            <InputName>City</InputName>
            <Input
              type="text"
              name="city"
              placeholder="Oslo"
              value={formData.location.city}
              onChange={handleLocationChange}
            />
          </Label>
          <Label>
            <InputName>Image (URL, max 1)</InputName>
            <Input
              type="text"
              name="imageUrl"
              value={formData.media[0]?.url ?? ""}
              onChange={handleImageUrlChange}
            />
            {errors.imageUrl && <ErrorMessage>{errors.imageUrl}</ErrorMessage>}

          </Label>
          <Label>
            <InputName>Description</InputName>
            <TextArea
              name="description"
              placeholder="Write something about the venue..."
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </Label>
          <Label>
            <InputName>Price NOK (per night)</InputName>
            <Input
              type="number"
              name="price"
              placeholder="100"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
          </Label>
          <Label>
            <InputName>Rating</InputName>
            <Input
              type="number"
              name="rating"
              placeholder="Enter rating"
              value={formData.rating}
              onChange={handleChange}
            />
            {errors.rating && <ErrorMessage>{errors.rating}</ErrorMessage>}
          </Label>

        </LeftContainer>

        <RightContainer>

          <Label>
            <InputName>Address</InputName>
            <Input
              type="text"
              name="address"
              placeholder="12 Maple Road"
              value={formData.location.address}
              onChange={handleLocationChange}
            />
          </Label>
          <Label>
            <InputName>Zip</InputName>
            <Input
              type="text"
              name="zip"
              placeholder="95586"
              value={formData.location.zip}
              onChange={handleLocationChange}
            />
          </Label>
          <Label>
            <InputName>Country</InputName>
            <Input
              type="text"
              name="country"
              placeholder="Norway"
              value={formData.location.country}
              onChange={handleLocationChange}
            />
          </Label>
          <Label>
            <InputName>Max guests</InputName>
            <Input
              type="number"
              name="maxGuests"
              placeholder="5"
              value={formData.maxGuests}
              onChange={handleChange}
            />
            {errors.maxGuests && <ErrorMessage>{errors.maxGuests}</ErrorMessage>}
          </Label>
          <p>Facilities</p>
          <LabelCheckbox>
            <CheckBox
              type="checkbox"
              name="wifi"
              checked={formData.meta.wifi}
              onChange={handleChange}
            />
            <InputName>Wifi</InputName>
          </LabelCheckbox>
          <LabelCheckbox>
            <CheckBox
              type="checkbox"
              name="pets"
              checked={formData.meta.pets}
              onChange={handleChange}
            />
            <InputName>Pets</InputName>
          </LabelCheckbox>
          <LabelCheckbox>
            <CheckBox
              type="checkbox"
              name="parking"
              checked={formData.meta.parking}
              onChange={handleChange}
            />
            <InputName>Parking</InputName>
          </LabelCheckbox>
          <LabelCheckbox>
            <CheckBox
              type="checkbox"
              name="breakfast"
              checked={formData.meta.breakfast}
              onChange={handleChange}
            />
            <InputName>Breakfast</InputName>
          </LabelCheckbox>
        </RightContainer>

        <ButtonContainer>
          <SubmitButton type="submit">Update</SubmitButton>

          <CancelButton to="/manager">Cancel</CancelButton>
        </ButtonContainer>

        {/* Legg til ErrorMessage-komponenten for å vise feilmeldinger */}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </CreateVenueForm>
      <Footer />
    </div>
  );
}

export default VenueUpdate;
