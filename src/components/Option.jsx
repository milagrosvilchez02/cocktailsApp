import React from "react";

const Option = ({ name, img, onSelect }) => {
  return (
    <div className="single-option" onClick={onSelect}>
      <p>{name}</p>
      {img && <img src={img} alt="option" />}
    </div>
  );
};

export default Option;
