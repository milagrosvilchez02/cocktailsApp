import React from "react";
import Button from "./Button";
import Header from "./Header";

const NavBar = ({ state, onReturn }) => {
  // const handleClick = (path) => {
  //   if (path === "home") onReturn(null);
  //   else {
  //     if (state.isSelected) onReturn(null);
  //     else onReturn(state.isSelected);
  //   }
  // };

  const handleClick = (path) => {
    if (path === "home") onReturn(null);
    else {
      if (state.displayCocktails) {
        onReturn(state.isSelected);
      } else {
        if (state.selectedLetter) {
          onReturn(state.isSelected);
        } else {
          onReturn(null);
        }
      }
    }
  };

  return (
    <div className="navbar">
      {state.isSelected && (
        <Button text="←" onClick={() => handleClick("back")} />
      )}
      <Header />
      {state.input && !state.selectedLetter && (
        <Button text="⌂" onClick={() => handleClick("home")} />
      )}
      {state.selectedLetter && (
        <Button text="⌂" onClick={() => handleClick("home")} />
      )}
    </div>
  );
};

export default NavBar;
