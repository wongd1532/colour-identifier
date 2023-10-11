import React, { useState } from "react";

export default function RgbInput({ onClick }) {
  const inputWidth = { width: "22px" };
  return (
    <>
      <button onClick={onClick}>Use HEX Instead</button>
      <form>
        <p>Enter your RGB code:</p>
        <span>
          RGB({" "}
          <input
            style={inputWidth}
            type="text"
            maxLength={3}
            placeholder="252"
            pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
          ></input>
          {" , "}
          <input
            style={inputWidth}
            type="text"
            maxLength={3}
            placeholder="186"
            pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
          ></input>
          {" , "}
          <input
            style={inputWidth}
            type="text"
            maxLength={3}
            placeholder="3"
            pattern="[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]"
          ></input>{" "}
          )
        </span>
      </form>
    </>
  );
}
