import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoContextType } from "../../types";

const TodoItem: React.FC<{ id: number; text: string; completed: boolean }> = ({
  id,
  text,
  completed,
}) => {
  const { toggleTodo, removeTodo } = useContext<TodoContextType>(TodoContext);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo?.(id)}
          className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
        />
        <span
          className={`text-lg ${
            completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => removeTodo?.(id)}
        className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
