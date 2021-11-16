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
    console.log(res["drinks"]);
    setState({ list: res["drinks"], data: null });
  };

  const handleClick = () => {
    onReturn(selected);
  };

  const handleItemSelect = (input) => {
    onItemSelect(input.toLowerCase());
  };

  return (
    <div className="load-info">
      <Button onClick={handleClick} text="BACK" />
      {state.data && (
        <div className="all-items">
          {state.data.map((i) => (
            <div key={i.idDrink} className="item">
              <div className="display-title">
                <div className="title-section">
                  <h1>{i.strDrink}</h1>
                </div>
                <img
                  className="display-image"
                  src={i.strDrinkThumb}
                  alt="example"
                />
              </div>
              {/* <div className="ingredients">{getIngredients(i)}</div> */}
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
      <Button onClick={handleClick} text="BACK" />
    </div>
  );
};

export default LoadInfo;
