import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoContextType } from "../../types";

const TodoAddTask: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useContext<TodoContextType>(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoText.trim()) {
      addTodo?.(todoText);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoAddTask;
