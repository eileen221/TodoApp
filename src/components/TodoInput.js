import { useState } from "react";

const TodoInput = ({ setTodos }) => {
  const [todoInput, setTodoInput] = useState("");
  const addTodo = () => {
    //edge case: input is empty string or white spaces
    if (!todoInput.trim()) {
      setTodoInput("");
      return;
    }

    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTodoInput(""); //clear input field
  };

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      ></input>
      <button onClick={addTodo} className="btn-normal">
        Add Todo
      </button>
    </div>
  );
};
export default TodoInput;
