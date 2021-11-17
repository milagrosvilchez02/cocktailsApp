import React, { useState } from "react";
import Option from "./Option";
import Button from "./Button";
import search from "../resources/iconsearch.png";

const Input = ({ selected, onReturn, onSearch }) => {
  const [state, setState] = useState({ searchQuery: "" });

  const handleChange = (query) => {
    setState({ searchQuery: query });
  };

  const handleSearch = () => {
    state.searchQuery === "" ? showError() : onSearch(state.searchQuery);
  };

  const showError = () => {
    window.alert("error");
  };

  const handleClick = () => {
    onReturn(null);
  };

  return (
    <div className="display-input">
      <Option name={selected.name} />
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Type here..."
          autoFocus
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        <img
          onClick={handleSearch}
          className="searcher-icon"
          src={search}
          alt="enter"
        />
      </div>

      <p className="hint">{selected.hint}</p>

      <Button onClick={handleClick} text="BACK" />
    </div>
  );
};

export default Input;
