import React, { useState } from "react";
import HexInput from "./HexInput";
import RgbInput from "./RgbInput";

export default function InputMode() {
  const [HexMode, setHexMode] = useState(true);
  function handleClick() {
    setHexMode(!HexMode);
  }

  return (
    <div>
      {HexMode ? (
        <HexInput onClick={handleClick} />
      ) : (
        <RgbInput onClick={handleClick} />
      )}
    </div>
  );
}
