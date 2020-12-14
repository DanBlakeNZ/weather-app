import React from "react";
import Spinner from "../spinner/spinner.component";

const SearchButton = ({ onClick, searching }) => (
  <button className="search-button" onClick={onClick}>
    {searching ? <Spinner /> : <i className="fa fa-search" />}
  </button>
);

export default SearchButton;
