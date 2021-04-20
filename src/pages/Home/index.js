import React from "react";
import SearchField from "../../components/SearchField";
import SearchItem from "../../components/SearchItem";
import MainView from "../../components/MainView";
import Grid from "../../components/Grid";
import { getApi, formatData } from "../../utils/api.js";

function Home() {
  const [searchText, setSearchText] = React.useState("Gin");
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const apiData = await getApi(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      const newDrinks = await formatData(apiData.drinks);
      setDrinks(newDrinks);
    })();
  }, [searchText]);

  const bgColors = ["myYellow", "myRed", "myGreen", "gray-100"];

  return (
    <MainView>
      <SearchField handleChange={(e) => setSearchText(e.target.value)} />
      <p>{drinks ? "" : "No drinks found. Enter something else!"} </p>
      <Grid>
        {drinks?.map((drink, index) => (
          <SearchItem
            key={drink.id}
            drinkName={drink.name}
            instructions={drink.instructions}
            image={drink.image}
            bgColor={bgColors[index % bgColors.length]}
            cardStyle="grid grid-rows-1 pb-10"
          >
            {drink.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <span className="font-medium">
                  {drink.measures[index % ingredient.length]}
                </span>
                <span>{ingredient}</span>
              </li>
            ))}
          </SearchItem>
        ))}
      </Grid>
    </MainView>
  );
}

export default Home;
