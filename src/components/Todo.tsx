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
    const duplicatedTodo = todos.find((t) => t.text === newText);
    if (duplicatedTodo) {
      alert("할일이 중복됐습니다.");
      return;
    }
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

  const handleFilterTodo = (filterId: number) => {
    const filteredTodo = todos.filter((t) => t.id !== filterId);
    setTodos(filteredTodo);
  };

  const handleEditTodo = (editId: number, editText: string) => {
    const editTodo = todos.map((t) => {
      if (t.id === editId) {
        return {
          ...t,
          text: editText,
        };
      } else {
        return t;
      }
    });
    setTodos(editTodo);
  };
  return (
    <div className="todo-container">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onFiltered={handleFilterTodo}
        onEdited={handleEditTodo}
      />
      총 개수:{todos.length}
    </div>
  );
}

let nextId = 4;
