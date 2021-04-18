import React from "react";

function SearchItem(props) {
  return (
    <div className="search-item">
      <div className={`bg-${props.bgColor} search-item__text h-80`}>
        <h3>{props.drinkName}</h3>
        <ul>{props.children}</ul>
        <p>{props.instructions}</p>
      </div>
      <div className="search-item__image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default SearchItem;
