import React, { useState, useEffect } from "react";
import Search from "../../Search/index";
import HeaderImage from "../../HeaderImage";
import useVenueData from "../FetchData";
import HeaderLoggedOut from "../../Layout/LoggedOut";
import { VenuesDiv } from "../style"; 

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
      <HeaderLoggedOut />
      <HeaderImage />
      <Search handleSearch={handleSearch} />
      <VenuesDiv>
        {filteredVenues.map((venue) => (
          <div key={venue.id}>
            <h2>{venue.name}</h2>
            <p>City: {venue.location.city}</p>
            <p>Rating: {venue.rating}</p>
            <p>NOK {venue.price}</p>
          </div>
        ))}
      </VenuesDiv>
    </div>
  );
}

export default VenueListLoggedIn;



