import { ChangeEvent, useState } from "react";
import { TodoType } from "./Todo";
import { useTodoDispatch } from "../\bcontext/TodoContext";

export default function TodoItem({ todo }: { todo: TodoType }) {
  let initialValue = todo.text;
  const [value, setValue] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useTodoDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleEdit = (todoId: number) => {
    dispatch({ type: "EDIT", editId: todoId, editText: value });
    setIsEdit((prev) => !prev);
  };

  return isEdit ? (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={() => handleEdit(todo.id)}>수정</button>
      <button onClick={() => setIsEdit(false)}>취소</button>
    </div>
  ) : (
    <li>
      {todo.text}
      <button onClick={() => dispatch({ type: "REMOVE", filterId: todo.id })}>
        삭제
      </button>
      <button onClick={handleIsEdit}>수정</button>
    </li>
  );
}
