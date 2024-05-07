import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderLoggedInManager from "../../Layout/Manager";
import useVenueData from "../FetchData";
import ApiKey from "../../Api/ApiKey";
import defaultImage from "../../VenueList/DefaultImg.jpg";
import {
  VenueImage,
  Container,
  LeftColumn,
  RightColumn,
  PriceContainer,
  VenueInfo,
  Option,
  VenueDescription,
  VenueLocation,
  IconParagraph,
  IconParagraphWifi,
  FacilitiesText,
  FacilitiesContainer,
  VenueName,
  Rating,
  PriceInfo,
  Price,
  BookNow,
  BookingDate,
  Guests,
  MaxGuests,
  LogIn,
  StarIcon,
  CustomDatePicker,
  DatePickerContainer,
} from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faParking,
  faUtensils,
  faPaw,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Layout/Footer";

function VenueDetailsManager() {
  const [selectedInfo, setSelectedInfo] = useState("Description");
  const location = useLocation();
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);

  useEffect(() => {
    async function fetchBookedDates() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/bookings?venueId=${venueId}`,
          {
            headers: {
              "X-Noroff-API-Key": ApiKey,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch booked dates");
        }


      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    }

    if (venueId) {
      fetchBookedDates();
    }
  }, [venueId]);

  if (!venue) {
    return <div>Loading...</div>;
  }

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div>
      <HeaderLoggedInManager />
      <Container>
        <LeftColumn>
          <VenueImage
            src={venue.media.length > 0 ? venue.media[0].url : defaultImage}
            alt={
              venue.media.length > 0 ? venue.media[0].alt : "Default"
            }
          />
          <VenueInfo>
            <Option isSelected={selectedInfo === "Description"} onClick={() => handleInfoClick("Description")}>
              Description
            </Option>
            <Option isSelected={selectedInfo === "Location"} onClick={() => handleInfoClick("Location")}>
              Location
            </Option>
            <Option isSelected={selectedInfo === "Facilities"} onClick={() => handleInfoClick("Facilities")}>
              Facilities
            </Option>
          </VenueInfo>
          <div>
            {selectedInfo === "Description" && (
              <div>
                <VenueDescription>
                  {venue.description}
                </VenueDescription>
              </div>
            )}
            {selectedInfo === "Location" && (
              <div>
                <VenueLocation>
                  <p>
                    {venue.location.address},
                  </p>
                  <p> {venue.location.zip} {venue.location.city}</p>
                </VenueLocation>
              </div>
            )}
            {selectedInfo === "Facilities" && (
              <FacilitiesContainer>
                <IconParagraphWifi>
                  <FontAwesomeIcon icon={faWifi}/>
                  <FacilitiesText>
                    {venue.meta.wifi ? "Wifi included" : "No wifi included"}
                  </FacilitiesText>
                </IconParagraphWifi>
                <IconParagraph>
                  <FontAwesomeIcon icon={faPaw} />
                  <FacilitiesText> 
                    {venue.meta.pets ? "Pet friendly" : "Pets not allowed"}
                  </FacilitiesText>
                </IconParagraph>
                <IconParagraph>
                  <FontAwesomeIcon icon={faUtensils} />
                  <FacilitiesText>
                    {venue.meta.breakfast ? "Breakfast included" : "No breakfast included"}
                  </FacilitiesText>
                </IconParagraph>
                <IconParagraph>
                  <FontAwesomeIcon icon={faParking} />
                  <FacilitiesText> 
                    {venue.meta.parking ? "Parking included" : "No parking included"}
                  </FacilitiesText>
                </IconParagraph>
              </FacilitiesContainer>
            )}
          </div>
        </LeftColumn>
        <RightColumn>
          <VenueName>{venue.name}</VenueName>
          <Rating>
            {venue.rating}
            <StarIcon icon={faStar} />
          </Rating>
          <PriceContainer>
            <PriceInfo>Starting price</PriceInfo>
            <Price>NOK {venue.price}</Price>
          </PriceContainer>
          <BookNow>Book your venue now!</BookNow>
          <DatePickerContainer>
            <BookingDate>Select booking dates:</BookingDate>
            <CustomDatePicker
              selected={new Date()}
              disabled
              dateFormat="dd/MM/yyyy"
            />
            <CustomDatePicker
              selected={new Date()}
              disabled
              dateFormat="dd/MM/yyyy"
            />
          </DatePickerContainer>
          <div>
            <Guests>Number of guests:</Guests>
            <input
              type="number"
              value={1}
              disabled
            />
            <MaxGuests>Max guests: {venue.maxGuests}</MaxGuests>
          </div>
          <LogIn to="/login">Please log in as user to book this venue.</LogIn>
        </RightColumn>
      </Container>
      <Footer />
    </div>
  );
}

export default VenueDetailsManager;
