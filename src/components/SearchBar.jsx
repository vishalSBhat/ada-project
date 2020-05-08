import React from "react";

const SearchBar = (props) => (
  <input
    className="search-bar"
    type="text"
    placeholder="Search book..."
    onChange={(e) => props.onChange(e)}
  />
);

export default SearchBar;
