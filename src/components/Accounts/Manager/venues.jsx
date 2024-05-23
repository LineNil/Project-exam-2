import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import { Link } from "react-router-dom";
import defaultImage from "../../VenueList/DefaultImg.jpg";
import deleteVenue from "../../ManageVenues/deleteVenue";
import { 
  Heading, 
  VenueContainer, 
  VenueDetails, 
  BookingDetails, 
  NoData, 
  VenueItem, 
  ManageButton, 
  Address, 
  Bookings, 
  CustomerName, 
  CustomerEmail, 
  BookingDate, 
  StyledDate, 
  CustomerBookingContainer, 
  VenueName, 
  Img, 
  ManageContainer, 
  ManageButtonDelete, 
  ShowAllButton 
} from "../bookingStyles";

function MyVenues() {
  const [venues, setVenues] = useState([]);
  const [showAllBookings, setShowAllBookings] = useState(false);
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
        if (data && data.data) {
          setVenues(data.data);
        } else {
          setVenues([]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserVenues();
  }, [accessToken, profileName]);

  const handleDeleteVenue = async (venueId) => {
    try {
      const success = await deleteVenue(venueId, accessToken);
      if (success) {
        const updatedVenues = venues.filter((venue) => venue.id !== venueId);
        setVenues(updatedVenues);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Heading>Your Venues</Heading>
      {venues.length === 0 ? (
        <NoData>You have no venues yet.</NoData>
      ) : (
        venues.map((venue) => (
          <VenueItem key={venue.id}>
            <VenueContainer>
              <VenueDetails>
                <VenueName>{venue.name}</VenueName>
                <Address>{venue.location.address}, {venue.location.city}</Address>
                {venue.media.length > 0 ? (
                  <Img src={venue.media[0].url} alt={venue.media[0].alt} />
                ) : (
                  <Img src={defaultImage} alt="Default" />
                )}
                <ManageContainer>
                  <Link to={`/venue-update/${venue.id}`}>
                    <ManageButton>Edit</ManageButton>
                  </Link>
                  <ManageButtonDelete onClick={() => handleDeleteVenue(venue.id)}>Delete</ManageButtonDelete>
                </ManageContainer>
              </VenueDetails>
              <BookingDetails>
                <Bookings>Bookings</Bookings>
                {venue.bookings && venue.bookings.length > 0 ? (
                  venue.bookings.slice(0, showAllBookings ? venue.bookings.length : 3).map((booking) => (
                    <CustomerBookingContainer key={booking.id}>
                      <CustomerName>{booking.customer.name}</CustomerName>
                      <CustomerEmail>{booking.customer.email}</CustomerEmail>
                      <CustomerEmail>{booking.guests} guest(s)</CustomerEmail>
                      <BookingDate>Booked from-to</BookingDate>
                      <StyledDate>{booking.dateFrom} - {booking.dateTo}</StyledDate>
                    </CustomerBookingContainer>
                  ))
                ) : (
                  <NoData>No bookings for this venue</NoData>
                )}
                {venue.bookings && venue.bookings.length > 3 && (
                  <ShowAllButton onClick={() => setShowAllBookings(!showAllBookings)}>
                    {showAllBookings ? "Show Less" : "Show All"}
                  </ShowAllButton>
                )}
              </BookingDetails>
            </VenueContainer>
          </VenueItem>
        ))
      )}
    </div>
  );
}

export default MyVenues;
