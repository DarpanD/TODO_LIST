import React, { useState } from "react";
import Todo from "./Todo";

export default function ShowItems(props) {
  // Ensure props.todos is an array by providing a default empty array if it's null or undefined
  const todos = props.todos || [];
  const [Search, setSearch] = useState("");

  return (
    <div className="col-8">
      <form className="d-flex " role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search For Todo"
          aria-label="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <h4 className="text-center fs-3 fw-bold my-4">Todo List</h4>
      <div className="todo-lists d-flex flex-column justify-content-evenly align-items-center">
        {todos.length === 0 ? (
          <>
            <h6>No Todos to Display</h6>
            <p>Add todos to see</p>
          </>
        ) : (
          todos
            .filter((g) => {
              return g.title.toLowerCase().includes(Search.toLowerCase());
            })
            .map((todo) => {
              return (
                <Todo todo={todo} key={todo.sr} onDelete={props.onDelete} />
              );
            })
        )}
      </div>
    </div>
  );
}
