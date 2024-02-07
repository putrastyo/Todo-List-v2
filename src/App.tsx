import Header from "./components/Header";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import { Todo } from "./types/Todo";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const { setItem, getItem } = useLocalStorage("todos");

  return (
    <div className="bg-secondary h-screen overflow-y-hidden pb-10 font-oswald">
      <Header todos={todos} setItem={setItem} setTodos={setTodos} />

      <TodoList
        todos={todos}
        setItem={setItem}
        setTodos={setTodos}
        getItem={getItem}
      />
    </div>
  );
};

export default App;

// Todos Data Structure:
// activity, category, isDone
