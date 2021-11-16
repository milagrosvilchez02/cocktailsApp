import React, { useState } from "react";
import Button from "./Button";
import Option from "./Option";
import abc from "../resources/abc";

const Alphabet = ({ name, onReturn, onLetterSelect }) => {
  const handleClick = () => {
    onReturn(null);
  };

  const handleSelect = (letter) => {
    onLetterSelect(letter.toLowerCase());
  };

  return (
    <div className="display-alphabet">
      <Option name={name} />
      <div className="alphabet-container">
        {abc.map((letter) => (
          <p
            key={letter}
            className="single-letter"
            onClick={() => handleSelect(letter)}
          >
            {letter}
          </p>
        ))}
      </div>
      <Button onClick={handleClick} text="BACK" />
    </div>
  );
};

export default Alphabet;
