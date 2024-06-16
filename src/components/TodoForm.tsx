import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function TodoForm({
  onAddTodo,
}: {
  onAddTodo: (newText: string) => void;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(value);
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
