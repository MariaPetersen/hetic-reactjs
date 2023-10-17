import React from "react";
import { Box } from "@mui/material";
import ToDo from "../ToDo/ToDo";

export default function DisplayTasks({ todo, setTodo, category }) {
  const filteredTasks = todo.filter((task) => {
    if (category === "completed") return task.completion;
    if (category === "todo") return !task.completion;
    return true;
  });

  function deleteTodo(id) {
    const updatedTodo = todo.filter((element) => element.id !== id);
    setTodo(updatedTodo);
    console.log(updatedTodo);
  }

  function setCompletion(id) {
    const updatedTodo = todo.map((element) => {
      if (element.id === id) {
        return { ...element, completion: !element.completion };
      } else {
        return element;
      }
    });
    setTodo(updatedTodo);
  }
  return (
    <Box sx={{ width: "100%" }}>
      {filteredTasks.map((element) => (
        <ToDo
          element={element}
          deleteTodo={deleteTodo}
          setCompletion={setCompletion}
          key={element.id}
        />
      ))}
    </Box>
  );
}
