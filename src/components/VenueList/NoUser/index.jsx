import React, { useState, useEffect } from "react";
import Search from "../../Search/NoUser";
import HeaderImage from "../../HeaderImage";
import useVenueData from "../FetchData";
import HeaderLoggedOut from "../../Layout/LoggedOut";
import defaultImage from "../DefaultImg.jpg";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { 
  VenuesDiv, 
  VenueItem, 
  Img, 
  Info, 
  ScrollToTop, 
  ViewVenue, 
  LinkViewVenue, 
  VenueName, 
  Location, 
  LocationInfo, 
  NOK, 
  NOKInfo, 
  Rating, 
  RatingNumber, 
  VenueCardInfo, 
  VenueCardInfoRating 
} from "../style"; 


function VenueListNoUser() {
  const venues = useVenueData();
  const [filteredVenues, setFilteredVenues] = useState([]);

  useEffect(() => {
    setFilteredVenues(venues);
  }, [venues]);

  const handleSearch = (searchTerm) => {
    const filteredVenues = venues.filter((venue) =>
      venue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVenues(filteredVenues);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <HeaderLoggedOut />
      <HeaderImage />
      <Search handleSearch={handleSearch} />
      <VenuesDiv>
        {filteredVenues.map((venue, index) => (
          <VenueItem key={venue.id} $index={index}>
            <Link to={`/venue-details-no-user/${venue.id}`} state={{ venue }}>
            {venue.media.length > 0 ? (
              <Img src={venue.media[0].url} alt={venue.media[0].alt} />
            ) : (
              <Img src={defaultImage} alt="Default" />
            )}
            </Link>
            <Info>
              <VenueName>{venue.name}</VenueName>
              <VenueCardInfo>
                <Location>Location: </Location>
                <LocationInfo>{venue.location.city}, {venue.location.country}</LocationInfo>
              </VenueCardInfo>
              <VenueCardInfo>
                <NOK>NOK:</NOK>
                <NOKInfo>{venue.price}, per night</NOKInfo>
              </VenueCardInfo>
              <VenueCardInfoRating>
                <Rating>Rating:</Rating>
                <RatingNumber>{venue.rating.toFixed(1)}</RatingNumber>
              </VenueCardInfoRating>
            </Info>
            <LinkViewVenue to={`/venue-details-no-user/${venue.id}`} state={{ venue }}>
              <ViewVenue>View Venue</ViewVenue>
            </LinkViewVenue>
          </VenueItem>
        ))}
      </VenuesDiv>
      <ScrollToTop onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default VenueListNoUser;