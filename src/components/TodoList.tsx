import { TodoType } from "./Todo";

export default function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <ul>
      {todos.length === 0
        ? "할일을 추가해주세요"
        : todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
}
