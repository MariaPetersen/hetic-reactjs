import React, { useState } from "react";

export default function NumberInput({
  number,
  handlePlus,
  handleMinus,
  inputValue,
  handleInputChange,
}) {
  return (
    <>
      <div>TOTAL : {number}</div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}
