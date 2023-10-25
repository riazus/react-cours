import React, { useState } from "react";

export default function AddTodoForm({ addNewTodo }) {
  const [addTodo, setAddTodo] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    addTodo !== "" && addNewTodo(addTodo);
    setAddTodo("");
  };

  return (
    <form className="my-4" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form-group">
          <strong>Ajouter Todo</strong>
          <input
            className="form-control"
            value={addTodo}
            type="text"
            onChange={(e) => setAddTodo(e.target.value)}
          />
          <input className="btn btn-success mt-4" type="submit" />
        </div>
      </div>
    </form>
  );
}
