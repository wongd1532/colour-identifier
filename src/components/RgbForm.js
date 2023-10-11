import React from "react";

export default function RgbForm() {
  let colourCode = "";

  const inputWidth = { width: "22px" };

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    colourCode =
      formJson["RED-value"] +
      " " +
      formJson["GREEN-value"] +
      " " +
      formJson["BLUE-value"];

    console.log(colourCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter your RGB code:</p>
      <p>
        RGB({" "}
        <input
          name="RED-value"
          style={inputWidth}
          type="text"
          maxLength={3}
          placeholder="252"
          pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
        ></input>
        {" , "}
        <input
          name="GREEN-value"
          style={inputWidth}
          type="text"
          maxLength={3}
          placeholder="186"
          pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
        ></input>
        {" , "}
        <input
          name="BLUE-value"
          style={inputWidth}
          type="text"
          maxLength={3}
          placeholder="3"
          pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
        ></input>{" "}
        )
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}
