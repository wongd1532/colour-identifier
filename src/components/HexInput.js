import React from "react";

export default function HexInput({ onClick }) {
  const inputWidth = { width: "67px" };

  return (
    <>
      <button onClick={onClick}>Use RGB Instead</button>
      <form>
        <p>Enter your HEX code:</p>
        <span>
          #
          <input
            style={inputWidth}
            type="text"
            maxLength={6}
            placeholder="fcba03"
            pattern="[a-f0-9]{6}"
          ></input>
        </span>
      </form>
    </>
  );
}
