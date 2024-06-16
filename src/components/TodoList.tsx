import { useState } from "react";
import { TodoType } from "./Todo";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onFiltered,
  onEdited,
}: {
  todos: TodoType[];
  onFiltered: (filterId: number) => void;
  onEdited: (editId: number, editText: string) => void;
}) {
  return (
    <ul>
      {todos.length === 0
        ? "할일을 추가해주세요"
        : todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onFiltered={onFiltered}
              onEdited={onEdited}
            />
          ))}
    </ul>
  );
}
