import React from "react";

export default function ModeSelector() {
  return (
    <fieldset>
      <legend>Select an input mode:</legend>

      <div>
        <input type="radio" id="HEX" name="mode" value="HEX" />
        <label>HEX</label>
      </div>

      <div>
        <input type="radio" id="RGB" name="mode" value="RGB" />
        <label>RGB</label>
      </div>
    </fieldset>
  );
}
