import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
