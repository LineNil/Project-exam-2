import React, { useState, useEffect } from "react";
import useVenueData from "../VenueData/index";
import Search from "../Search/index";
import HeaderImage from "../HeaderImage";
import HeaderLoggedOut from "../Layout/LoggedOut";



function VenueList() {
  const allVenues = useVenueData();
  const [venues, setVenues] = useState(allVenues);
  
  useEffect(() => {
    setVenues(allVenues);
  }, [allVenues]);

  const handleSearch = (searchTerm) => {
    const filteredVenues = allVenues.filter((venue) =>
      venue.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVenues(filteredVenues);
  };

  return (
    <div>
      <HeaderLoggedOut/>
      <HeaderImage/>
      <Search handleSearch={handleSearch} /> 
      <div>
        {venues.map((venue) => (
          <div key={venue.id}>
            <h2>{venue.name}</h2>
            <p>City: {venue.location.city}</p>
            <p>Rating: {venue.rating}</p>
            <p>NOK {venue.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueList;
