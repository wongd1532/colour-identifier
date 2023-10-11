import React from "react";

export default function HexInput() {
  return (
    <form>
      <p>Enter your HEX code:</p>
      <span>
        #<input maxLength={6} minLength={6} placeholder="fcba03"></input>
      </span>
    </form>
  );
}
