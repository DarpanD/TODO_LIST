import React, { useState } from "react";

export default function AddItems({ addTodo }) {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(" i am submitted on onsubmit", title, desc);

    // check if fields not empty
    if (!title || !desc) {
      alert("Task Fields cannot be left empty");
    } else {
      addTodo(title, desc);
      settitle("");
      setDesc("");
    }
  };

  return (
    <div className="col-4">
      <h4 className="text-center fs-3 fw-bold my-4">Add Task</h4>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
