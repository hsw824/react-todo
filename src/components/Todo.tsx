import { TodoProvider } from "../\bcontext/TodoContext";
import TodoContent from "./TodoContent";

// TODO: 완료로 취소선 만들어보고 총 개수에 완료된 개수 추가해보기
// TODO: 컴포넌트 조금 더 나눠보기
export interface TodoType {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function Todos() {
  return (
    <TodoProvider>
      <TodoContent />
    </TodoProvider>
  );
}
