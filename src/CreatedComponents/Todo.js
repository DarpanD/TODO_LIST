import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <div className="card bg-secondary ">
      <div className="card-body">
        {/* cannot be renders as parameter name key cannot be read in react ,  if want to pass same value in different named agrument
        <span>{key}</span> */}
        <h5 className="card-title text-light">{todo.title}</h5>
        <p className="card-text text-body">{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete{" "}
        </button>
      </div>
    </div>
  );
}
