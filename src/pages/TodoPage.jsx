import React, { useEffect, useState } from "react";
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
    <div className="todoContainer">
      <h2>Liste de tâches</h2>
      <AddToTodo setTodo={setTodo} todo={todo} />
      <Filter setCategory={setCategory} />
      <hr />
      <DisplayTasks todo={todo} setTodo={setTodo} category={category} />
    </div>
  );
}
