import React from "react";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import "./styles.scss";

export default function ToDo({ element, setCompletion, deleteTodo }) {
  return (
    <>
      <li key={element.id} className="list">
        <div>
          <Checkbox
            onClick={() => setCompletion(element.id)}
            checked={element.completion}
            id={element.id}
          />
          <label htmlFor={element.id} className="label">
            {element.text}
          </label>
        </div>
        <Button onClick={() => deleteTodo(element.id)} variant="contained">
          Supprimer
        </Button>
      </li>
    </>
  );
}
