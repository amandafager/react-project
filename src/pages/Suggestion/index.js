import React from "react";
import Button from "../../components/Button";
import MainView from "../../components/MainView";
import SearchItem from "../../components/SearchItem";
import Ingredient from "../../components/Ingredient";
import { getARandomDrink } from "../../utils/api.js";

export default function Suggestion() {
  const [drinks, setDrinks] = React.useState([]);
  const [sendRequest, setSendRequest] = React.useState(false);

  React.useEffect(() => {
    if (sendRequest) {
      (async function () {
        const randomDrink = await getARandomDrink();
        setDrinks(randomDrink);
        setSendRequest(false);
      })();
    }
  }, [sendRequest]);

  const bgColors = ["myYellow", "red-50", "green-50", "gray-100"];

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <MainView>
      <Button
        text={"Get a cocktail suggestion"}
        handleClick={() => setSendRequest(true)}
        buttonStyle="sm:m-5 border-1"
      />
      {drinks?.map((drink) => (
        <SearchItem
          key={drink.id}
          drinkName={drink.name}
          instructions={drink.instructions}
          image={drink.image}
          bgColor={getRandomColor(bgColors)}
          cardStyle="sm:w-80 lg:w-1/3 mt-16"
        >
          {drink.ingredients?.map((ingredient, index) => (
            <Ingredient
              key={index}
              measure={drink.measures[index % ingredient.length]}
              ingredient={ingredient}
            />
          ))}
        </SearchItem>
      ))}
    </MainView>
  );
}
