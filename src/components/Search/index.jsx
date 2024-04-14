import React, { useState } from "react";
import { SearchButton, SearchForm } from "./style";

function Search({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState ("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return(
    <SearchForm onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}


export default Search;