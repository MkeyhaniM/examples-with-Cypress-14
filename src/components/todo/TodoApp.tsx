import { useContext } from "react";

import TodoList from "./TodoList";
import TodoAddTask from "./TodoAddTask";

import { TodoContext } from "../../context/TodoContext";
import { TodoContextType } from "../../types";

const TodoApp: React.FC = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
    <div className="todo-app p-6 bg-white shadow-md rounded-lg">
      <TodoAddTask />
      {todos && todos.length > 0 ? (
        <TodoList />
      ) : (
        <p className="text-gray-500 text-center">
          No tasks available. Start by adding a new task!
        </p>
      )}
    </div>
  );
};

export default TodoApp;
