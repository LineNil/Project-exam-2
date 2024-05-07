import React, { useState, useEffect } from "react";
import ApiKey from "../../Api/ApiKey";
import { Heading, VenueContainer, Img, VenueDetails, VenueItem, VenueName, Address, ManageContainer, ManageButton, BookingDetails, Bookings, BookingContainer, BookingDate, DateBooked } from "./style"; 
import defaultImage from "../../VenueList/DefaultImg.jpg";
import { Link } from "react-router-dom";

function UserBookings() {
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
        console.log("Response Data:", responseData);
        if (Array.isArray(responseData.data)) {
          console.log("Response Data is an array.");
          setBookings(responseData.data);
        } else {
          console.error("Error: Response data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, [accessToken, profileName]);

  // Function to calculate total price based on venue price and number of days booked
  const calculateTotalPrice = (pricePerDay, dateFrom, dateTo) => {
    const start = new Date(dateFrom);
    const end = new Date(dateTo);
    const numberOfDays = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Calculate difference in days
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
        // Remove the deleted booking from the state
        const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
        setBookings(updatedBookings);
        console.log("Booking deleted successfully.");
      } else {
        console.error("Failed to delete booking.");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
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
                <Link to={`/venue-list-loggedin`}>
                  <ManageButton>View venue</ManageButton>
                </Link>
                <ManageButton onClick={() => handleDeleteBooking(booking.id)}>Delete</ManageButton>
              </ManageContainer>
            </VenueDetails>
<BookingDetails>
<Bookings>Bookings</Bookings>
<BookingContainer>
  <BookingDate>Booked from-to</BookingDate>
  <DateBooked>{booking.dateFrom} - {booking.dateTo}</DateBooked>

  <BookingDate>Guests</BookingDate>
  <DateBooked>{booking.guests}</DateBooked>



            {booking.venue && (
              <div>
                  <BookingDate>Price</BookingDate>
                <DateBooked>Per day: NOK {booking.venue.price}</DateBooked>
                <DateBooked>Total: NOK {calculateTotalPrice(booking.venue.price, booking.dateFrom, booking.dateTo)}</DateBooked>
              </div>
            )}
            <BookingDate>Booking ID</BookingDate>
            <DateBooked>{booking.id}</DateBooked>


</BookingContainer>

</BookingDetails>

          </VenueContainer>
        </VenueItem>
      ))}
    </div>
  );
}

export default UserBookings;
