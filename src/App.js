import React, { useState } from "react";

import "./App.scss";
import Input from "./components/Input";
import Start from "./components/Start";
import Alphabet from "./components/Alphabet";
import LoadInfo from "./components/LoadInfo";

function App() {
  const [state, setState] = useState({
    isSelected: null,
    selectedLetter: null,
    displayCocktails: false,
    input: null,
  });

  const handleSelect = (option) => {
    if (option) setState({ isSelected: option });
    else setState({ isSelected: null });
  };

  const handleSearch = (input) => {
    setState({ input, displayCocktails: true, ...state });
  };

  const handleLetterSelect = (letter) => {
    setState({ selectedLetter: letter, ...state });
  };
  const handleItemSelect = (input) => {
    handleSearch(input);
  };

  return (
    <div className="App">
      {!state.isSelected && !state.input && <Start onSelect={handleSelect} />}
      {state.isSelected && state.isSelected.name === "NAME" && !state.input && (
        <Input
          selected={state.isSelected}
          onReturn={handleSelect}
          onSearch={handleSearch}
        />
      )}
      {state.isSelected &&
        state.isSelected.name === "FIRST LETTER" &&
        !state.selectedLetter && (
          <Alphabet
            name={state.isSelected.name}
            onReturn={handleSelect}
            onLetterSelect={handleLetterSelect}
          />
        )}
      {state.displayCocktails && (
        <LoadInfo
          input={state.input}
          selected={state.isSelected}
          onReturn={handleSelect}
        />
      )}
      {state.selectedLetter && !state.displayCocktails && (
        <LoadInfo
          letter={state.selectedLetter}
          selected={state.isSelected}
          onReturn={handleSelect}
          onItemSelect={handleItemSelect}
        />
      )}
    </div>
  );
}

export default App;
