import React from "react";

// you can put inside or outside component function, more readable outside
// the fonts the use is able to select
const fonts = [
  { name: "Roboto", fontStyle: "Roboto" },
  { name: "Staatliches", fontStyle: "Staatliches" },
  { name: "Architects Daughter", fontStyle: "Architects Daughter" },
  { name: "Alfa Slab One", fontStyle: "Alfa Slab One" },
  { name: "Alegreya", fontStyle: "Alegreya" },
  { name: "Bangers", fontStyle: "Bangers" },
  { name: "Comic Neue", fontStyle: "Comic Neue" },
  { name: "Creepster", fontStyle: "Creepster" },
  { name: "Epilogue", fontStyle: "Epilogue" },
  { name: "Noto Serif Display", fontStyle: "Noto Serif Display" },
  { name: "Playfair Display", fontStyle: "Playfair Display" },
  { name: "Satisfy", fontStyle: "Satisfy" },
];

// passing in the destructured that applies to the font selection checkboxes
const FontSelection = ({
  fontChangeHandler,
  checked,
  disabled,
  fontCheckboxHandler,
}) => {
  return (
    <>
      <h2>Choose your Font</h2>
      <ul className="fontSelection">
        {fonts.map((font, index) => {
          return (
            <li onClick={fontChangeHandler} key={index}>
              <input
                onChange={() => fontCheckboxHandler(index)}
                type="checkbox"
                id={`font${index}`}
                value={font.fontStyle}
                checked={checked[index] || false}
                disabled={!checked[index] && disabled}
                required
              />
              <label htmlFor={`font${index}`}>
                <h3 style={{ fontFamily: `${font.fontStyle}` }}>{font.name}</h3>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FontSelection;
