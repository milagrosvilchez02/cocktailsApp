import martini from "./martini.png";
import abc from "./abc.png";

const options = [
  {
    name: "NAME",
    img: martini,
    hint: "Hint: you must write the name of a cocktail! For example: “Margarita”.",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
  },
  {
    name: "FIRST LETTER",
    img: abc,
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=",
  },
];

export default options;
