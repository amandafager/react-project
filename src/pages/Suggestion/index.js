import React from "react";
import Button from "../../components/Button";
import MainView from "../../components/MainView";
import SearchItem from "../../components/SearchItem";
import { getARandomDrink } from "../../utils/api.js";

function Suggestion() {
  const [drinks, setDrinks] = React.useState([]);
  const [sendRequest, setSendRequest] = React.useState(false);

  React.useEffect(() => {
    if (sendRequest) {
      (async () => {
        const randomDrink = await getARandomDrink();
        setDrinks(randomDrink);
        console.log(randomDrink);
        setSendRequest(false);
      })();
    }
  }, [sendRequest]);

  const bgColors = ["yellow-100", "red-100", "green-100", "gray-100"];

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <MainView>
      <Button
        text={"Get a drink suggestion"}
        handleClick={() => setSendRequest(true)}
        buttonStyle=""
      />
      {drinks?.map((drink, index) => (
        <SearchItem
          key={drink.id}
          drinkName={drink.name}
          instructions={drink.instructions}
          image={drink.image}
          bgColor={getRandomColor(bgColors)}
          cardStyle="sm:w-80 lg:w-1/3 mt-16"
        >
          {drink.ingredients?.map((ingredient, index) => (
            <li key={index}>
              <span>{drink.measures[index % ingredient.length]}</span>
              <span>{ingredient}</span>
            </li>
          ))}
        </SearchItem>
      ))}
    </MainView>
  );
}

export default Suggestion;
