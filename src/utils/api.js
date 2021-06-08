export function getApi(path) {
  const api = fetch(`${path}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return api;
}

export function formatData(data) {
  const drinks = data;
  const newDrinks = drinks?.map((drink) => {
    const measures = Object.keys(drink)
      .map((key) => {
        if (key.startsWith("strMeasure")) {
          return drink[key];
        }
        return null;
      })
      .filter((item) => item)
      .map((key) => key.trim() + " ");

    const ingredients = Object.keys(drink)
      .map((key) => {
        if (key.startsWith("strIngredient")) {
          return drink[key];
        }
        return null;
      })
      .filter((item) => item)
      .map((key) => key.trim());

    return {
      id: drink.idDrink,
      category: drink.strCategory,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      ingredients: ingredients,
      instructions: drink.strInstructions,
      measures: measures,
    };
  });

  return newDrinks;
}

export async function getARandomDrink() {
  const apiData = await getApi(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const newDrinks = await formatData(apiData.drinks);

  return newDrinks;
}
