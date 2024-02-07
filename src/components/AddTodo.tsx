import { useState } from "react";
import { Todo } from "../types/Todo";

type AddTodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setItem: (value: unknown) => void;
  showAddForm: boolean;
};

const AddTodo = ({ todos, setTodos, setItem, showAddForm }: AddTodoProps) => {
  const [activity, setActivity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = { id: todos.length + 1, activity, category, isDone: false };
    const updatedTodos = [...todos, newTodo];

    setItem(updatedTodos);
    setTodos(updatedTodos);
    setActivity("");
    setCategory("");
  };

  return (
    <div
      className={`w-1/2 max-w-full mx-auto py-4 text-xs transition-all ${
        showAddForm ? "block" : "hidden"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            type="text"
            name="activity"
            placeholder="Activity..."
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="bg-tertiary p-2 outline-none rounded-s-sm block w-full text-gray-600"
          />
          <button
            type="submit"
            className="bg-secondary p-2 text-primary font-bold rounded-e-sm"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
