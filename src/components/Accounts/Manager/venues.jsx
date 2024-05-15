import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import { Link } from "react-router-dom";
import { Heading, VenueContainer, VenueDetails, BookingDetails, VenueItem, ManageButton, Address, Bookings, CustomerName, CustomerEmail, BookingDate, StyledDate, CustomerBookingContainer, VenueName, Img, ManageContainer, ManageButtonDelete, ShowAllButton } from "../User/bookings/bookingStyles";
import defaultImage from "../../VenueList/DefaultImg.jpg";
import deleteVenue from "../../ManageVenues/deleteVenue";

function MyVenues() {
  const [venues, setVenues] = useState([]);
  const [showAllBookings, setShowAllBookings] = useState(false); // State to toggle showing all bookings
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
        console.log("User venues data:", data);
        if (data && data.data) {
          setVenues(data.data);
        } else {
          console.log("User has no venues.");
          setVenues([]);
        }
      } catch (error) {
        console.error("Error fetching user's venues:", error);
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
      console.error("Error deleting venue:", error);
    }
  };

  return (
    <div>
      <Heading>My Venues</Heading>
      {venues.map((venue) => (
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
                <Link to={`/venue-details-manager/${venue.id}`}>
                  <ManageButton>View</ManageButton>
                </Link>
                <Link to={`/venue-update/${venue.id}`}>
                  <ManageButton>Edit</ManageButton>
                </Link>
                <ManageButtonDelete onClick={() => handleDeleteVenue(venue.id)}>Delete</ManageButtonDelete>
              </ManageContainer>
            </VenueDetails>




            <BookingDetails>
              <Bookings>Bookings</Bookings>
              {/* Show only the first three bookings if showAllBookings is false */}
              {venue.bookings && venue.bookings.slice(0, showAllBookings ? venue.bookings.length : 3).map((booking) => (
                <CustomerBookingContainer key={booking.id}>
                  <CustomerName>{booking.customer.name}</CustomerName>
                  <CustomerEmail>{booking.customer.email}</CustomerEmail>
                  <BookingDate>Booked from-to</BookingDate>
                  <StyledDate>{booking.dateFrom} - {booking.dateTo}</StyledDate>
                </CustomerBookingContainer>
              ))}
              {/* Show button to toggle showing all bookings */}
              {venue.bookings && venue.bookings.length > 3 && (
                <ShowAllButton onClick={() => setShowAllBookings(!showAllBookings)}>
                  {showAllBookings ? "Show Less" : "Show All"}
                </ShowAllButton>
              )}
            </BookingDetails>
          </VenueContainer>
        </VenueItem>
      ))}
    </div>
  );
}

export default MyVenues;
