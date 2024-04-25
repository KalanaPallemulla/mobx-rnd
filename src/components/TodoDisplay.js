import { observer } from "mobx-react";
import React, { useEffect } from "react";
import todoStore from "../stores/TodoStore";

const TodoDisplay = () => {
  useEffect(() => {
    todoStore.addTodos();
  }, []);
  return (
    <div>
      <h2>Todo API List</h2>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default observer(TodoDisplay);
