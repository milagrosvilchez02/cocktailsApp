import React, { useState, useEffect } from "react";
import Button from "./Button";

const LoadInfo = ({ input, letter, selected, onReturn, onItemSelect }) => {
  const [state, setState] = useState({ data: null, list: null });
  useEffect(() => {
    input ? getData() : getList();
  }, []);

  const getData = async () => {
    let baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const data = await fetch(baseUrl + input);
    const res = await data.json();
    setState({ data: res["drinks"], list: null });
  };

  const getList = async () => {
    const data = await fetch(selected.url + letter);
    const res = await data.json();
    setState({ list: res["drinks"], data: null });
  };

  const handleClick = () => {
    onReturn(selected);
  };

  const handleItemSelect = (input) => {
    onItemSelect(input.toLowerCase());
  };

  const getIngredients = (item) => {
    let number = 1;
    let ingredients = [];
    while (item["strIngredient" + number]) {
      ingredients.push(item["strIngredient" + number]);
      number++;
    }
    return ingredients;
  };
  const getMeasures = (item) => {
    let number = 1;
    let measures = [];
    while (item["strMeasure" + number]) {
      measures.push(item["strMeasure" + number]);
      number++;
    }
    return measures;
  };

  return (
    <div className="load-info">
      {state.data && (
        <div className="all-items">
          {state.data.map((i) => (
            <div key={i.idDrink} className="item">
              <div className="top">
                <div className="display-title">
                  <h1>{i.strDrink}</h1>
                  <img
                    className="display-image"
                    src={i.strDrinkThumb}
                    alt="example"
                  />
                </div>
                <div className="basics">
                  <div className="ingredients">
                    <h4>Ingredients</h4>
                    {getIngredients(i).map((ing) => (
                      <p>{ing}</p>
                    ))}
                  </div>

                  <div className="measures">
                    <h4>Measures</h4>

                    {getMeasures(i).map((qua) => (
                      <p>{qua}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="display-howto">
                <h4>How to:</h4>
                <p>{i.strInstructions}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {state.list && (
        <div className="list">
          {state.list.map((i) => (
            <p key={i.idDrink} onClick={() => handleItemSelect(i.strDrink)}>
              {i.strDrink}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadInfo;
