import React from "react";
import ColourIs from "./ColourIs";

export default function HexForm() {
  let colourCode = "";

  const inputWidth = { width: "67px" };

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    colourCode = formJson["HEX-value"];

    console.log(colourCode);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Enter your HEX code:</p>
        <p>
          #
          <input
            name="HEX-value"
            style={inputWidth}
            type="text"
            maxLength={6}
            placeholder="fcba03"
            pattern="[a-f0-9]{6}"
          ></input>
        </p>
        <button type="submit">Submit</button>
        <ColourIs colourCode={colourCode} />
      </form>
    </>
  );
}
