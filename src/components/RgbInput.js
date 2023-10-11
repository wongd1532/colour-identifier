import React, { useState } from "react";
import RgbForm from "./RgbForm";

export default function RgbInput({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Use HEX Instead</button>
      <RgbForm />
    </>
  );
}
