import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderLoggedOut from "../../Layout/LoggedOut";
import useVenueData from "../FetchData";
import defaultImage from "../../VenueList/DefaultImg.jpg";
import Footer from "../../Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faParking,
  faUtensils,
  faPaw,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  VenueImage,
  Container,
  LeftColumn,
  RightColumn,
  PriceContainer,
  VenueInfo,
  StyledOption,
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
  LogIn,
  StarIcon
} from "../style";


function VenueDetailsNoUser() {
  const [selectedInfo, setSelectedInfo] = useState("Description");

  const location = useLocation();
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);

  if (!venue) {
    return <div>Loading...</div>;
  }

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div>
      <HeaderLoggedOut />
      <Container>
        <LeftColumn>
          <VenueImage
            src={venue.media.length > 0 ? venue.media[0].url : defaultImage}
            alt={
              venue.media.length > 0 ? venue.media[0].alt : "Default"
            }
          />
          <VenueInfo>
            <StyledOption $isSelected={selectedInfo === "Description"} onClick={() => handleInfoClick("Description")}>
              Description
            </StyledOption>
            <StyledOption $isSelected={selectedInfo === "Location"} onClick={() => handleInfoClick("Location")}>
              Location
            </StyledOption>
            <StyledOption $isSelected={selectedInfo === "Facilities"} onClick={() => handleInfoClick("Facilities")}>
              Facilities
            </StyledOption>
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
          <LogIn to="/login">Please log in to book this venue.</LogIn>
        </RightColumn>
      </Container>
      <Footer />
    </div>
  );
}

export default VenueDetailsNoUser;