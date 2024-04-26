import React, { useState } from "react";
import { SearchButton, SearchForm,StyledInput } from "./style";
import { Link } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/holidaze/venues/search?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to search venues");
      }
      const data = await response.json();
      console.log("Search results:", data);
      setSearchResults(data.data); 
      setSearched(true); 
    } catch (error) {
      console.error("Error searching venues:", error);
      //legg inn error
      
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      
      setSearchTerm("");
      setSearchResults([]);
      setSearched(false);
    } else {
      handleSearch(searchTerm);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Expolore venues..."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {searched && searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <div>
            {searchResults.map((venue) => (
              <div key={venue.id}>
                <h3>{venue.name}</h3>
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
      ) : searched ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
}

export default Search;
