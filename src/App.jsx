import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "../component/TodoList";     
import CreateTodo from "../component/CreateTodo";
import EditTodo from "../component/EditTodo";
import "../src/index.css"

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todos/create" element={<CreateTodo />} />
        <Route path="/todos/:id/edit" element={<EditTodo />} />      
        <Route path="*" element={<TodoList />} />         
      </Routes>
    </BrowserRouter>
    </div>
  );
}
