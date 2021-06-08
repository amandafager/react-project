import PropTypes from "prop-types";

export default function Ingredient(props) {
  return (
    <li>
      <span className="font-medium">{props.measure}</span>
      <span>{props.ingredient}</span>
    </li>
  );
}

Ingredient.propTypes = {
  measure: PropTypes.string,
  ingredient: PropTypes.string,
};
