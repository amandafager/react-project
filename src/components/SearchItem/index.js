import PropTypes from "prop-types";
import React from "react";

export default function SearchItem(props) {
  return (
    <article className={props.cardStyle}>
      <div className={`bg-${props.bgColor} p-4`}>
        <h3 className="text-2xl uppercase font-bold p-4">{props.drinkName}</h3>
        <div className="">
          <ul className="pl-10 list-disc">{props.children}</ul>
          <p className="p-4">{props.instructions}</p>
        </div>
      </div>
      <div>
        <img src={props.image} alt={`A ${props.drinkName} drink in a glas`} />
      </div>
    </article>
  );
}

SearchItem.propTypes = {
  cardStyle: PropTypes.string,
  bgColor: PropTypes.string,
  drinkName: PropTypes.string,
  children: PropTypes.array,
  instructions: PropTypes.string,
  image: PropTypes.string,
};
