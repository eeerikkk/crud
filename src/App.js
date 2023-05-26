import { useState } from "react";
import "./App.css";
import AddList from "./components/AddList";
import axios from "axios";
import CardList from "./components/CardList";
import EditList from "./components/EditList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const API = "http://localhost:8000/List";

function App() {
  const [todo, setTodo] = useState([]);

  const [editedTodo, setEditedTodo] = useState(null);

  async function addTodo(newObj) {
    await axios.post(API, newObj);
    getTodos();
  }

  async function getTodos() {
    let result = await axios.get(API);
    setTodo(result.data);
    // console.log(todo);
  }

  async function editTodo(id) {
    let res = await axios.get(`${API}/${id}`);
    // console.log(res.data);
    setEditedTodo(res.data);
  }

  async function updateTodo(id, newValue) {
    await axios.patch(`${API}/${id}`, newValue);
    getTodos();
    setEditedTodo(null);
  }

  return (
    <div>
      <AddList addTodo={addTodo} />

      <CardList getTodos={getTodos} todo={todo} editTodo={editTodo} />

      {editedTodo ? (
        <EditList editedTodo={editedTodo} updateTodo={updateTodo} />
      ) : (
        <h1>nothing</h1>
      )}
    </div>
  );
}

export default App;
