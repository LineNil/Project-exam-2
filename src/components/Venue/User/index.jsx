import React, { useState, useEffect } from "react";
import HeaderLoggedIn from "../../Layout/User";
import { useLocation, useNavigate } from "react-router-dom";
import useVenueData from "../FetchData";
import ApiKey from "../../Api/ApiKey";
import defaultImage from "../../VenueList/DefaultImg.jpg";
import Footer from "../../Layout/Footer/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWifi, 
  faParking, 
  faUtensils, 
  faPaw, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
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
  BookingDate, 
  Guests, 
  MaxGuests, 
  BookingButton, 
  StarIcon, 
  CustomDatePicker, 
  DatePickerContainer   
} from "../style";




async function createBooking(startDate, endDate, guests, venueId) {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch("https://v2.api.noroff.dev/holidaze/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": ApiKey,
      },
      body: JSON.stringify({
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: guests,
        venueId: venueId
      })
    });

    if (!response.ok) {
      throw new Error("The selected dates and guests either overlap with an existing booking or exceed the maximum guests for this venue.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("The selected dates and guests either overlap with an existing booking or exceed the maximum guests for this venue.");
  }
}

function VenueDetailsLoggedInUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState(null);
  const venueId = location.state.venue.id;
  const venue = useVenueData(venueId);
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState("Description");

  useEffect(() => {

    async function fetchBookedDates() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/bookings?venueId=${venueId}`, {
          headers: {
            "X-Noroff-API-Key": ApiKey,
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch booked dates');
        }

        const data = await response.json();
        const dates = data.data.map(booking => ({
          startDate: new Date(booking.dateFrom),
          endDate: new Date(booking.dateTo)
        }));
        setBookedDates(dates);
      } catch (error) {
        alert('Error fetching booked dates:' + error.message);
      }
    }

    if (venueId) {
      fetchBookedDates();
    }
  }, [venueId]);

  const handleBookVenue = async () => {
    try {
      await createBooking(startDate, endDate, guests, venueId);
      navigateToBookingSuccess(); 
    } catch (error) {
      setError(error.message);
    }
  };

  const navigateToBookingSuccess = () => {
    navigate("/booking-success");
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div>
      <HeaderLoggedIn />
      <Container>
        <LeftColumn>
          <VenueImage src={venue.media.length > 0 ? venue.media[0].url : defaultImage} alt={ venue.media.length > 0 ? venue.media[0].alt : "Default" }/>
          <VenueInfo>
            <StyledOption selected={ selectedInfo === "Description" } onClick={() => handleInfoClick("Description") }>
              Description
            </StyledOption>
            <StyledOption selected={ selectedInfo === "Location" } onClick={() => handleInfoClick("Location") }>
              Location
            </StyledOption>
            <StyledOption selected={ selectedInfo === "Facilities" } onClick={() => handleInfoClick("Facilities") }>
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
          <DatePickerContainer>
            <BookingDate>Select booking dates:</BookingDate>
            <CustomDatePicker 
              selected={startDate}
              onChange={(date) =>
                setStartDate(date)
              }
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              excludeDates={bookedDates.map(
                (booking) => booking.startDate
              )}
            />
            <CustomDatePicker 
              selected={endDate}
              onChange={(date) =>
                setEndDate(date)
              }
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              excludeDates={bookedDates.map(
                (booking) => booking.endDate
              )}
            />
          </DatePickerContainer>
          <div>
            <Guests>Number of guests:</Guests>
            <input
              type="number"
              value={guests}
              onChange={(e) =>
                setGuests(parseInt(e.target.value))
              }
              min={1}
            />
            <MaxGuests>Max guests: {venue.maxGuests}</MaxGuests>
          </div>
          <BookingButton onClick={handleBookVenue}>
            Book Venue
          </BookingButton>
          {error && (
            <p style={{ color: "red" }}>
              {error}
            </p>
          )}
        </RightColumn>
      </Container>
      <Footer/>
    </div>
  );
}

export default VenueDetailsLoggedInUser;