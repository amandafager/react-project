import PropTypes from "prop-types";
import React from "react";

function SearchField(props) {
  return (
    <div className="sm:m-5 min-w-min relative">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75.7717 70.5372L51.1003 45.8658C54.9288 40.9163 56.9998 34.8648 56.9998 28.4999C56.9998 20.8809 54.0263 13.7369 48.6493 8.35046C43.2723 2.96399 36.1093 0 28.4999 0C20.8904 0 13.7274 2.97349 8.35046 8.35046C2.96399 13.7274 0 20.8809 0 28.4999C0 36.1093 2.97349 43.2723 8.35046 48.6493C13.7274 54.0358 20.8809 56.9998 28.4999 56.9998C34.8648 56.9998 40.9068 54.9288 45.8563 51.1098L70.5277 75.7717C70.6 75.8441 70.6859 75.9015 70.7805 75.9407C70.875 75.9798 70.9764 76 71.0787 76C71.181 76 71.2824 75.9798 71.3769 75.9407C71.4714 75.9015 71.5573 75.8441 71.6297 75.7717L75.7717 71.6392C75.8441 71.5668 75.9015 71.481 75.9407 71.3864C75.9798 71.2919 76 71.1905 76 71.0882C76 70.9859 75.9798 70.8845 75.9407 70.79C75.9015 70.6954 75.8441 70.6095 75.7717 70.5372V70.5372ZM43.5478 43.5478C39.5198 47.5663 34.1809 49.7798 28.4999 49.7798C22.8189 49.7798 17.4799 47.5663 13.4519 43.5478C9.43346 39.5198 7.21997 34.1809 7.21997 28.4999C7.21997 22.8189 9.43346 17.4704 13.4519 13.4519C17.4799 9.43346 22.8189 7.21997 28.4999 7.21997C34.1809 7.21997 39.5293 9.42396 43.5478 13.4519C47.5663 17.4799 49.7798 22.8189 49.7798 28.4999C49.7798 34.1809 47.5663 39.5293 43.5478 43.5478Z"
            fill="black"
          />
        </svg>
      </span>
      <input
        className="p-2 sm:pr-10 pl-10 sm:p-2 border-2 border-black focus:outline-black"
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
export default SearchField;
