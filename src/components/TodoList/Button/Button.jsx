import React from "react";
import "./styles.scss";

export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}
