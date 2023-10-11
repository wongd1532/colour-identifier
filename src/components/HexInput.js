import React from "react";
import HexForm from "./HexForm";

export default function HexInput({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Use RGB Instead</button>
      <HexForm />
    </>
  );
}
