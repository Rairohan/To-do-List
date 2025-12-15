import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/index.css"

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      description: description || null,
      status,
      img,
    };
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    navigate("/todos");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Create Todo</h2>
      <input
        required
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <input type="file" accept="image/*" onChange={handleImage} className="file" />
      {img && <img src={img} width="100" alt="preview" />}
      <button type="submit">Add Todo</button>
    </form>
  );
}
