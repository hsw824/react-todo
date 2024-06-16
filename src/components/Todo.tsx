import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider, useTodos } from "../\bcontext/TodoContext";

// TODO: 완료로 취소선 만들어보고 총 개수에 완료된 개수 추가해보기
// TODO: 컴포넌트 조금 더 나눠보기
export interface TodoType {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function Todos() {
  const todos = useTodos();
  return (
    <TodoProvider>
      <div className="todo-container">
        <TodoForm />
        <TodoList />총 개수:{todos.length}
      </div>
    </TodoProvider>
  );
}
