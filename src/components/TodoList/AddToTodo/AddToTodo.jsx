import { useState } from "react";
import React from "react";
import { Grid, Input } from "@mui/material";
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
    <Grid
      container
      mt={2}
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "center" }}
    >
      <Grid item xs={2}>
        <Input
          type="text"
          value={newTodo}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          sx={{ width: "100%s" }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button onClick={addTodo} variant="contained">
          Ajouter à la liste
        </Button>
      </Grid>
    </Grid>
  );
}
