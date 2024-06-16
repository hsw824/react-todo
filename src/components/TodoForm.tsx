import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useTodoDispatch } from "../\bcontext/TodoContext";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const dispatch = useTodoDispatch();

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD", newText: value, id: nextId++ });
    setValue("");
    inputRef.current!.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleValue}
        placeholder="할 일을 입력하세요"
        ref={inputRef}
      />
      <button>입력</button>
    </form>
  );
}
let nextId = 4;
