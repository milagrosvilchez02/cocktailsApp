import React from "react";
import Option from "./Option";
import options from "../resources/options";

const Start = ({ onSelect }) => {
  const handleSelected = (o) => {
    onSelect(o);
  };

  return (
    <React.Fragment>
      <div className="main">
        <p className="text">Search by:</p>
        <div className="options">
          {options.map((o) => (
            <Option
              key={o.name}
              name={o.name}
              img={o.img}
              onSelect={() => handleSelected(o)}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Start;
