import { TodoType } from "./Todo";

export default function TodoList({
  todos,
  onFiltered,
}: {
  todos: TodoType[];
  onFiltered: (filterId: number) => void;
}) {
  return (
    <ul>
      {todos.length === 0
        ? "할일을 추가해주세요"
        : todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => onFiltered(todo.id)}>삭제</button>
            </li>
          ))}
    </ul>
  );
}
