import React from "react";

export default function ColourIs({ colourCode }) {
  console.log(colourCode); //test
  function toHex(code) {
    let HexCode = code
      .split(" ")
      .map((x) => parseInt(x, 16))
      .join("");
    return HexCode;
  }

  let newCode = colourCode.includes(" ") ? toHex(colourCode) : colourCode;
  console.log(newCode); //test

  const colourBoxStyle = { background: "#" + newCode };
  return (
    <>
      <p>Your colour is:</p>
      <div style={colourBoxStyle} className="colour-box"></div>
    </>
  );
}
