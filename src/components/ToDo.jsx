import React, { useState } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState({});

  function onInputChange(e) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        text: newTodo,
        completion: false,
      },
    ]);
  }

  function setCompletion(id) {
    const updatedTodo = todo.map((element) => {
      console.log(element.id);
      console.log(id);
      if (element.id === id) {
        return { ...element, completion: !element.completion };
      } else {
        return element;
      }
    });
    setTodo(updatedTodo);
    console.log(updatedTodo);
  }

  function deleteTodo(id) {
    console.log(id);
    const updatedTodo = todo.filter((element) => element.id !== id);
    setTodo(updatedTodo);
    console.log(updatedTodo);
  }

  return (
    <>
      <div>
        <input type="text" value={newTodo.text} onChange={onInputChange} />
        <button onClick={addTodo}>Ajouter à la liste</button>
      </div>
      <ul>
        {todo.map((element, index) => (
          <div>
            <li
              key={`${element.id}-${index}`}
              onClick={() => setCompletion(element.id)}
            >
              {element.completion ? (
                <input
                  type="checkbox"
                  id={element.id}
                  defaultChecked={element.completion}
                />
              ) : (
                <input type="checkbox" id={element.id} />
              )}
              <label htmlFor={element.id}>{element.text}</label>
            </li>
            <button onClick={() => deleteTodo(element.id)}>Supprimer</button>
          </div>
        ))}
      </ul>
    </>
  );
  // {Id, text, completion}
  // Ajouter de taches
  // supprimer
  // valider de taches (checkbox)
  // systeme de filtrage (toutes, non terminées, terminées)
}
