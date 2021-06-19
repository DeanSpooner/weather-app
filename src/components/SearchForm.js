import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";
import magnifier from "../images/magnifier.png";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      return onSubmit();
    }
    return null;
  };

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        value={searchText}
        className="search-form__input"
      />
      <button type="submit" onClick={onSubmit} className="search-form__button">
        <img src={magnifier} alt="magnifier" />
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
