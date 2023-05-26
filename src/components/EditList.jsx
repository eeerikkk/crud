import React, { useState } from "react";

const EditList = ({ editedTodo, updateTodo }) => {
  const [title, setTitle] = useState(editedTodo.title);

  async function saveEdited() {
    let newValue = { ...editedTodo, title: title };
    updateTodo(newValue.id, newValue);
  }

  return (
    <div>
      <h1>Edit Todo</h1>
      <input
        type="text"
        placeholder="edit task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={saveEdited}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditList;
