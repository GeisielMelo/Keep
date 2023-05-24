import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="container heading-padding">
      <input className="search-bar" type="text" placeholder="Search" />
      <button className="search-btn squared" title="Search"><SearchIcon/></button>
    </div>
  );
}

export default Search;
