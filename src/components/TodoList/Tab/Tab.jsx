import React from "react";
import "./styles.scss";

export default function table({ onClick, text }) {
  return (
    <div onClick={onClick} className="tab">
      {text}
    </div>
  );
}
