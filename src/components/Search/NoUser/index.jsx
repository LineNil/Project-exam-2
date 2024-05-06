import React, { useState } from "react";
import { VenuesDiv, VenueItem, Img, Info, ViewVenue, LinkViewVenue, VenueName, Location,LocationInfo,NOK, NOKInfo, Rating, RatingNumber, VenueCardInfo, VenueCardInfoRating, SearchForm, SearchButton, StyledInput, Results, ResultsH2Div, NoResults } from "../../VenueList/style";


// Importer standard fallback-bilde
import defaultImage from "../../VenueList/DefaultImg.jpg";

function SearchNoUser() {
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
          placeholder="Expolore venues... no user"
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {searched && searchResults.length > 0 ? (
        
        
        <VenuesDiv>
                <ResultsH2Div>
          <Results>Search Results logged out</Results>
          </ResultsH2Div>

            {searchResults.map((venue, index) => (
              <VenueItem key={venue.id} index={index}>


                {venue.media.length > 0 ? (
                  <Img src={venue.media[0].url} alt={venue.media[0].alt}/>
                ) : (
                  <Img src={defaultImage} alt="Default image" />
                )}
                <Info>
                  <VenueName>{venue.name} logged out</VenueName>
                  <VenueCardInfo>
                    <Location>Location:</Location>
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
      ) : searched ? (
        <NoResults>No results found.</NoResults>
      ) : null}
    </div>
  );
}

export default SearchNoUser;
