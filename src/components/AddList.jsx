import React, { useState } from "react";

const AddList = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  function getValue(e) {
    setTitle(e.target.value);
  }

  function handleValue() {
    let newObj = {
      title: title,
      status: false,
      time: Date.now(),
    };
    addTodo(newObj);
    setTitle("");
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={getValue}
      />
      <button onClick={handleValue}>ADD</button>
    </div>
  );
};

export default AddList;
