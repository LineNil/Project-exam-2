import React, { useState, useEffect } from "react";
import Search from "../../../Search/User";
import HeaderImage from "../../../HeaderImage";
import HeaderLoggedIn from "../../../Layout/User";
import useVenueData from "../../FetchData";
import { VenuesDiv, VenueItem, Img, Info, ViewVenue, LinkViewVenue, VenueName, Location, LocationInfo, NOK, NOKInfo, Rating, RatingNumber, VenueCardInfo, VenueCardInfoRating } from "../../style";


import defaultImage from "../../DefaultImg.jpg";

function VenueListLoggedIn() {
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

  return (
    <div>
      <HeaderLoggedIn />
      <HeaderImage />
      <Search handleSearch={handleSearch} />
      <VenuesDiv>
        {filteredVenues.map((venue, index) => (
          <VenueItem key={venue.id} index={index}>
            {/* Sjekk om det er tilgjengelige bilder, hvis ikke, bruk fallback-bilde */}
            {venue.media.length > 0 ? (
              <Img src={venue.media[0].url} alt={venue.media[0].alt} />
            ) : (
              <Img src={defaultImage} alt="Default" />
            )}
            <Info>

              <VenueName>{venue.name} user page</VenueName>




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
            <LinkViewVenue to={`/venue-details/${venue.id}`} state={{ venue }}>
                <ViewVenue>View Venue</ViewVenue>
              </LinkViewVenue>
          </VenueItem>
        ))}
      </VenuesDiv>
    </div>
  );
}

export default VenueListLoggedIn;


