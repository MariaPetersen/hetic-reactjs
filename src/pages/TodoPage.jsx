import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";
import "./styles.scss";
import DisplayTasks from "../components/TodoList/DisplayTasks/DisplayTasks";
import Filter from "../components/TodoList/Filter/Filter";
import AddToTodo from "../components/TodoList/AddToTodo/AddToTodo";

export default function TodoPage() {
  const [todo, setTodo] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todo));
  }, [todo]);

  return (
    <Box m={2}>
      <Typography variant="h6" component="h3">
        Liste de tâches
      </Typography>
      <AddToTodo setTodo={setTodo} todo={todo} />
      <Filter setCategory={setCategory} category={category} />
      <DisplayTasks todo={todo} setTodo={setTodo} category={category} />
    </Box>
  );
}
