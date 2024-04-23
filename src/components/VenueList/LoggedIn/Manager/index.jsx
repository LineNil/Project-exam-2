import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../../Search";
import HeaderImage from "../../../HeaderImage";
import HeaderLoggedInManager from "../../../Layout/Manager";
import useVenueData from "../../FetchData";


function VenueListLoggedInManager() {
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
      <HeaderLoggedInManager />
      <HeaderImage />
      <Search handleSearch={handleSearch} />
      <div>
        {filteredVenues.map((venue) => (
          <div key={venue.id}>
            <h2>{venue.name}</h2>
            <p>City: {venue.location.city}</p>
            <p>Rating: {venue.rating}</p>
            <p>NOK {venue.price}</p>
            <Link to={`/venue-details/${venue.id}`} state={{ venue }}>
              <button>View Venue</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueListLoggedInManager;


