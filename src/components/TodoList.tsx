import { useEffect } from "react";
import { GetItemFunction, SetItemFunction, Todo } from "../types/Todo";
import trashIcon from "../assets/icons/trash.svg";
import NoTodos from "./NoTodos";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setItem: SetItemFunction;
  getItem: GetItemFunction;
};

const TodoList = ({ todos, setItem, setTodos, getItem }: TodoListProps) => {
  useEffect(() => {
    const storedTodos = getItem();
    if (storedTodos) {
      setTodos(storedTodos);
    }
    // eslint-disable-next-line
  }, []);

  const handleRemove = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setItem(updatedTodos);
  };

  const handleToggle = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
    setItem(updatedTodos);
  };

  return (
    <div className="mx-auto h-3/4 overflow-y-auto px-4">
      {todos.length ? (
        todos.map((todo: Todo) => (
          <div
            key={todo.id}
            className={`${
              todo.isDone ? "bg-checked" : "bg-tertiary"
            } text-primary rounded-lg p-4 mb-1 transition-all`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none rounded-full border-primary w-5 h-5 border-2 checked:bg-primary cursor-pointer transition-all mr-4"
                  onChange={() => handleToggle(todo.id)}
                  checked={todo.isDone}
                />
                <p
                  className="cursor-pointer text-sm w-52 md:w-auto"
                  onClick={() => handleToggle(todo.id)}
                >
                  {todo.activity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="w-[24px]"
                >
                  <img src={trashIcon} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoTodos />
      )}
    </div>
  );
};

export default TodoList;
