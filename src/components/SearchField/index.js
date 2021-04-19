import PropTypes from "prop-types";
import React from "react";
import Button from "../../components/Button";

function SearchField(props) {
  return (
    <div className="sm:m-5 min-w-min">
      <input
        className="p-2 sm:p-2 border-2 border-black focus:outline-black"
        type="text"
        placeholder="Search for a drink"
        onChange={props.handleChange}
      />
      <Button
        text="Search"
        buttonStyle="border-t-2 border-b-2 border-r-2 border-black"
      />
    </div>
  );
}

SearchField.propTypes = {
  onChange: PropTypes.func,
};
export default SearchField;
