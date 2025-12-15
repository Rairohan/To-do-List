# Todo App

## Project Description
A simple **Todo List application** built with **React and Vite** that allows users to create, edit, delete, and manage todos. Each todo can optionally include an image, and all todos are stored in **localStorage** for persistence.

---

## Features
- Add, edit, and delete todos  
- Toggle todo status (**pending** / **completed**)  
- Upload and preview images for each todo  
- Delete confirmation using `window.confirm`  
- Responsive UI with styled forms and buttons  
- Fixed textarea and neat container for inputs  

---

## Technologies Used
- React (Functional Components + Hooks)  
- React Router v6  
- LocalStorage for persistence  
- CSS for styling  
- Vite for development  

---

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd to-do-list
npm install
npm run dev
```
The app will run on http://localhost:5173
 by default.

Approach / Implementation

Used React functional components and hooks (useState, useEffect) for managing state and side effects.
React Router v6 handles navigation between routes:
/todos → Todo list
/todos/create → Create todo
/todos/:id/edit → Edit todo

LocalStorage is used to persist todos across page reloads.
FileReader API allows previewing images before saving.
Basic CSS ensures a clean UI: vertical form layout using flex, styled buttons, and fixed textarea.
## Screenshots

### Todo List
![Todo List](/src/assets/todo.png)

### Create Todo
![Create Todo](/src/assets/todo.png)

### Edit Todo
![Edit Todo](/src/assets/edit.png)
