import React, { useEffect } from "react";

const CardList = ({ getTodos, todo, editTodo }) => {
  useEffect(() => {
    getTodos();
    console.log(todo);
  }, []);

  return (
    <div>
      {todo.map((item) => (
        <h1 key={item.id}>
          {item.title} <button onClick={() => editTodo(item.id)}>Edit</button>
          <button>Delete</button>
        </h1>
      ))}
    </div>
  );
};

export default CardList;
