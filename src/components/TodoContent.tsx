import { useTodos } from "../\bcontext/TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContent() {
  const todos = useTodos();

  return (
    <div className="todo-container">
      <TodoForm />
      <TodoList />총 개수:{todos.length}
    </div>
  );
}
