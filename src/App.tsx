import "./App.css";
import TodoApp from "./components/todo/TodoApp";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>
        <TodoProvider>
          <TodoApp />
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
