import React from "react";

export default function RgbInput() {
  const inputWidth = { width: "22px" };
  return (
    <form>
      <p>Enter your RGB code:</p>
      <span>
        RGB({" "}
        <input
          style={inputWidth}
          maxLength={3}
          minLength={1}
          placeholder="252"
        ></input>
        ,{" "}
        <input
          style={inputWidth}
          maxLength={3}
          minLength={1}
          placeholder="186"
        ></input>
        ,{" "}
        <input
          style={inputWidth}
          maxLength={3}
          minLength={1}
          placeholder="3"
        ></input>{" "}
        )
      </span>
    </form>
  );
}
