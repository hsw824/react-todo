import TodoItem from "./TodoItem";
import { useTodos } from "../\bcontext/TodoContext";

export default function TodoList() {
  const todos = useTodos();
  return (
    <ul>
      {todos.length === 0 ? (
        <span>할일을 추가해주세요</span>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
