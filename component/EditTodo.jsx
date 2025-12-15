import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../src/index.css"

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todo = todos.find((t) => t.id === Number(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
      setStatus(todo.status);
      setImage(todo.img);
    }
  }, [id]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updated = todos.map((t) =>
      t.id === Number(id)
        ? { ...t, title, description: description || null, status, img: image }
        : t
    );
    localStorage.setItem("todos", JSON.stringify(updated));
    navigate("/todos");
  };

  return (
    <form onSubmit={handleSubmit} className="form3">
      <h2>Edit Todo</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <input type="file" accept="image/*" onChange={handleImage} />
      {image && <img src={image} width="100" alt="preview" />}
      <button type="submit">Update Todo</button>
    </form>
  );
}
