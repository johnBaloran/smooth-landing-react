import React from "react";

// you can put inside or outside component function, more readable outside
const fonts = [
  { name: "Roboto", fontStyle: "Roboto" },
  { name: "Space Mono", fontStyle: "Space Mono" },
  { name: "Staatliches", fontStyle: "Staatliches" },
];

const FontSelection = ({ fontChangeHandler }) => {
  return (
    <>
      <h2>Choose your Font</h2>
      {fonts.map((font, index) => {
        return (
          <div onClick={fontChangeHandler}>
            <input type="checkbox" id={`font${index}`} value={font.fontStyle} />
            <label htmlFor={`font${index}`}>
              <h3 style={{ fontFamily: `${font.fontStyle}` }}>{font.name}</h3>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default FontSelection;
