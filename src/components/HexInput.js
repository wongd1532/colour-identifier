import React from "react";

export default function HexInput() {
  const inputWidth = { width: "67px" };

  return (
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
  );
}
