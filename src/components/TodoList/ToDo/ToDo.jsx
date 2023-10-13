import React from "react";
import Button from "../Button/Button";
import "./styles.scss";

export default function ToDo({ element, setCompletion, deleteTodo }) {
  return (
    <>
      <li key={element.id} className="list">
        <div>
          <input
            onClick={() => setCompletion(element.id)}
            type="checkbox"
            id={element.id}
            defaultChecked={element.completion}
          />
          <label htmlFor={element.id} className="label">
            {element.text}
          </label>
        </div>
        <Button onClick={() => deleteTodo(element.id)} text="Supprimer" />
      </li>
    </>
  );
}
