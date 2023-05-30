import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSendedText = (e) => {
    setQuery(e.target.value);
    onSearch(query);
  }

  return (
    <div className="container heading-padding">
      <input
        className="search-bar"
        type="search"
        placeholder="Search"
        name="query"
        id="query"
        title="Search by title"
        value={query}
        onChange={handleSendedText}
      />
      <button
        className="search-btn squared"
        title="Search"
        onClick={() => onSearch(query)}
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
