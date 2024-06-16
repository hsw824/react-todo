import { ChangeEvent, useState } from "react";
import { TodoType } from "./Todo";

export default function TodoItem({
  todo,
  onFiltered,
  onEdited,
}: {
  todo: TodoType;
  onFiltered: (filterId: number) => void;
  onEdited: (editId: number, editText: string) => void;
}) {
  let initialValue = todo.text;
  const [value, setValue] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleEdit = (todoId: number) => {
    onEdited(todoId, value);
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
      <button onClick={() => onFiltered(todo.id)}>삭제</button>
      <button onClick={handleIsEdit}>수정</button>
    </li>
  );
}
