import { useState } from "react";
import React from "react";
// import Button from "../Button/Button";
import Button from "@mui/material/Button";
import "./styles.scss";

export default function AddToTodo({ setTodo, todo }) {
  const [newTodo, setNewTodo] = useState("");

  function onInputChange(e) {
    setNewTodo(e.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function addTodo() {
    if (newTodo !== "") {
      setTodo([
        ...todo,
        {
          id: Date.now(),
          text: newTodo,
          completion: false,
        },
      ]);
      setNewTodo("");
    }
  }
  return (
    <div className="addToList">
      <input
        type="text"
        value={newTodo}
        onChange={onInputChange}
        className="input"
        onKeyDown={handleKeyDown}
      />
      <Button onClick={addTodo} variant="contained">
        Ajouter à la liste
      </Button>
    </div>
  );
}
