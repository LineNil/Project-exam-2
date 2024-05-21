import React, { useState, useEffect } from "react";
import ApiKey from "../../../Api/ApiKey";
import defaultImage from "../../../VenueList/DefaultImg.jpg";
import { 
  Heading, 
  StyledDate, 
  ManageButtonDelete, 
  VenueContainer, 
  Img, 
  VenueDetails, 
  VenueItem, 
  VenueName, 
  Address, 
  ManageContainer, 
  BookingDetails, 
  Bookings, 
  BookingContainer, 
  BookingDate 
} from "../../bookingStyles"; 


function ManagerBookings() {
  const [bookings, setBookings] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const profileName = localStorage.getItem("loggedInUserName");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/profiles/${profileName}/bookings?_venue=true`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "X-Noroff-API-Key": ApiKey,
            },
          }
        );
        const responseData = await response.json();
        if (Array.isArray(responseData.data)) {
          setBookings(responseData.data);
        }
      } catch (error) {
      }
    }

    fetchBookings();
  }, [accessToken, profileName]);

  const calculateTotalPrice = (pricePerDay, dateFrom, dateTo) => {
    const start = new Date(dateFrom);
    const end = new Date(dateTo);
    const numberOfDays = Math.round((end - start) / (1000 * 60 * 60 * 24));
    return pricePerDay * numberOfDays;
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-Noroff-API-Key": ApiKey,
          },
        }
      );
      if (response.ok) {
        const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
        setBookings(updatedBookings);
      }
    } catch (error) {
    }
  };

  return (
    <div>
      <Heading>Your Bookings</Heading>
      {bookings.map((booking) => (
      <VenueItem key={booking.id}>
        <VenueContainer>
          <VenueDetails>
            <VenueName>{booking.venue.name}</VenueName>
            <Address>{booking.venue.location.address}, {booking.venue.location.city}</Address>
            <Img src={booking.venue.media.length > 0 ? booking.venue.media[0].url : defaultImage} alt={booking.venue.media.length > 0 ? booking.venue.media[0].alt : "Default"} />
            <ManageContainer>
              <ManageButtonDelete onClick={() => handleDeleteBooking(booking.id)}>Delete</ManageButtonDelete>
            </ManageContainer>
          </VenueDetails>
          <BookingDetails>
            <Bookings>Booking</Bookings>
            <BookingContainer>
              <BookingDate>Booked from-to</BookingDate>
              <StyledDate>{booking.dateFrom} - {booking.dateTo}</StyledDate>
              <BookingDate>Guests</BookingDate>
              <StyledDate>{booking.guests}</StyledDate>
              {booking.venue && (
              <div>
                <BookingDate>Price</BookingDate>
                <StyledDate>Per day: NOK {booking.venue.price}</StyledDate>
                <StyledDate>Total: NOK {calculateTotalPrice(booking.venue.price, booking.dateFrom, booking.dateTo)}</StyledDate>
              </div>
              )}
              <BookingDate>Booking ID</BookingDate>
              <StyledDate>{booking.id}</StyledDate>
           </BookingContainer>
         </BookingDetails>
        </VenueContainer>
      </VenueItem>
      ))}
    </div>
  );
}

export default ManagerBookings;
