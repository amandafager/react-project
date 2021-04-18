import React from "react";

function SearchField(props) {
  return (
    <div className="sm:m-5 min-w-min">
      <input
        className="p-2 sm:p-2 border-2 border-black"
        type="text"
        placeholder="Search something"
        onChange={props.handleChange}
      />
      <button className="p-2 sm:p-2 bg-black border-2 border-black text-white">
        Search
      </button>
    </div>
  );
}

export default SearchField;
