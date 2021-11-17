import cocktail2 from "./cocktail2.png";
import cocktail from "./cocktail.png";

const options = [
  {
    name: "NAME",
    img: cocktail2,
    hint: "Hint: you must write the name of a cocktail! For example: “Margarita”.",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
  },
  {
    name: "FIRST LETTER",
    img: cocktail,
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=",
  },
];

export default options;
