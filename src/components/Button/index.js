import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`${props.buttonStyle} bg-gray-900 text-white p-2 pr-4 pl-4 font-bold focus:outline-black hover:bg-gray-700 border-2 border-black`}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  text: PropTypes.string,
};
