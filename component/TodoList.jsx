import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../src/index.css"

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  const deleteTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(updated));
    setTodos(updated);
  };

  const toggleStatus = (id) => {
    const updated = todos.map((t) =>
      t.id === id
        ? { ...t, status: t.status === "pending" ? "completed" : "pending" }
        : t
    );
    localStorage.setItem("todos", JSON.stringify(updated));
    setTodos(updated);
  };

  return (
    <div className="form2">
      <h1 className="todo">Todo List</h1>
      <Link to="/todos/create" className="create">Create-Todo</Link>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Description:{todo.description}</p>
          <p>Status: {todo.status}</p>
          {todo.img && <img src={todo.img} width="100" alt="" />}
          <br />
          <button onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <Link to={`/todos/${todo.id}/edit`} className="Edit">
            Edit
          </Link>
          
        </div>
      ))}
    </div>
  );
}
