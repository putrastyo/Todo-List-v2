// Todos
export type Todo = {
  id: number;
  activity: string;
  isDone: boolean;
};

// Local Storage
export type SetItemFunction = (value: unknown) => void;
export type GetItemFunction = () => Todo[] | undefined;
