import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export interface TodoType {
  id: number;
  text: string;
  isCompleted: boolean;
}
export default function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, text: "todo 만들기", isCompleted: false },
    { id: 2, text: "todo 보기", isCompleted: false },
    { id: 3, text: "todo 리팩토링하기", isCompleted: false },
  ]);

  const handleAddTodo = (newText: string) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: nextId++,
          text: newText,
          isCompleted: false,
        },
      ];
    });
  };
  return (
    <div className="todo-container">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

let nextId = 4;
