import PropTypes from "prop-types";
import React from "react";
import SearchIcon from "../SearchIcon";

export default function SearchField(props) {
  return (
    <div className="sm:m-5 min-w-min relative">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <SearchIcon />
      </span>
      <input
        className="p-2 pl-10 sm:pl-10 sm:p-2 border-2 border-black focus:outline-black"
        type="search"
        placeholder="Search for a cocktail"
        onChange={props.handleChange}
      />
    </div>
  );
}

SearchField.propTypes = {
  onChange: PropTypes.func,
};
