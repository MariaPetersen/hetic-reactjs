import React, { useState } from "react";

export default function GestionIn() {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>{text}</div>
      <input type="text" value={text} onChange={handleInput} />
    </div>
  );
}
