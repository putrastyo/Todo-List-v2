import AddTodo from "./AddTodo";
import plusIcon from "../assets/icons/plus.png";
import { SetItemFunction, Todo } from "../types/Todo";
import { useState } from "react";

type HeaderProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setItem: SetItemFunction;
  // getItem: GetItemFunction;
};

const Header = ({ todos, setItem, setTodos }: HeaderProps) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div
      className={`bg-primary w-screen md:w-1/2 mx-auto rounded-b-[150px] pt-4 pb-10 relative mb-10 transition-all ${
        showAddForm ? "h-36" : "h-20"
      }`}
    >
      <h1 className="text-center text-quartenary text-3xl font-semibold">
        SPecto
      </h1>
      <button
        className="bg-primary border-4 border-secondary rounded-full absolute left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2 w-12 h-12 transition-all duration-150 hover:border-0"
        onClick={() => setShowAddForm((prev) => !prev)}
      >
        <img
          src={plusIcon}
          className={`w-6 m-auto ${
            showAddForm ? "rotate-[225deg]" : ""
          } transition-all duration-300`}
        />
      </button>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        setItem={setItem}
        showAddForm={showAddForm}
      />
    </div>
  );
};

export default Header;
