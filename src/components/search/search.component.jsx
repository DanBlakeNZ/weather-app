import React, { useState } from "react";
import { locationSearch } from "../../services/location-services";
import SearchButton from "../search-button/search-button.component";
import FormInput from "../form-input/form-input.component";

const Search = ({ setForecast }) => {
  let [location, setLocation] = useState("");
  let [searchResults, setSearchResults] = useState([]);
  let [searching, setSearching] = useState(false);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearching(true);
    locationSearch({ query: location }).then((response) => {
      setSearchResults(response);
      setSearching(false);
    });
  };

  const locationSelect = (selectedLocation) => {
    setForecast(selectedLocation.woeid);
    setLocation("");
    setSearchResults([]);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="Location"
          value={location}
          label="Search location"
          onChange={handleChange}
        />
        <div className="search-button-container">
          <SearchButton text="Find" type="primary" searching={searching} />
        </div>
      </form>

      <div className="">
        {searchResults.map((result, i) => (
          <div className="result" key={i} onClick={() => locationSelect(result)}>
            {result.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
