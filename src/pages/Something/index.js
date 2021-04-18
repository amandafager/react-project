import React from "react";
import SearchItem from "../../components/SearchItem";
import { getARandomDrink } from "../../utils/api.js";

function Something() {
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const randomDrink = await getARandomDrink();
      console.log(randomDrink);
      setDrinks(randomDrink);
    })();
  }, []);

  return (
    <>
      {drinks?.map((drink) => (
        <SearchItem
          key={drink.id}
          drinkName={drink.name}
          instructions={drink.instructions}
          image={drink.image}
          bgColor={drink.color}
        >
          {drink.ingredients?.map((ingredient, index) => (
            <li key={index}>
              <span>{drink.measures[index % ingredient.length]}</span>
              <span>{ingredient}</span>
            </li>
          ))}
        </SearchItem>
      ))}
    </>
  );
}

export default Something;
