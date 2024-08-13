import React, { useState, useEffect } from "react";
import AddItems from "./AddItems";
import ShowItems from "./ShowItems";

export default function TodoPage() {
  let TodoPageStyle = {
    minHeight: "100vh",
    padding: "40px 0",
  };

  // Ensure initTodo is an array
  let initTodo = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initTodo);

  let onDelete = (todo) => {
    setTodos(
      todos.filter((remainingTodo) => {
        return remainingTodo !== todo;
      })
    );
  };

  let addTodo = (title, desc) => {
    let srno;
    if (todos.length === 0) {
      srno = 1;
    } else {
      srno = parseInt(todos[todos.length - 1].sr) + 1;
    }
    const NewTodo = {
      sr: srno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, NewTodo]);
    console.log(NewTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container" style={TodoPageStyle}>
      <div className="row">
        <AddItems addTodo={addTodo} />
        <ShowItems todos={todos} onDelete={onDelete} />
      </div>
    </div>
  );
}
