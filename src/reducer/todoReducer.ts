import { TodoType } from "../components/Todo";
type Action =
  | { type: "ADD"; newText: string; id: number }
  | { type: "REMOVE"; filterId: number }
  | { type: "EDIT"; editId: number; editText: string };

export default function todoReducer(todos: TodoType[], action: Action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          id: action.id,
          text: action.newText,
          isCompleted: false,
        },
      ];

    case "REMOVE":
      return todos.filter((t) => t.id !== action.filterId);

    case "EDIT":
      return todos.map((t) => {
        if (t.id === action.editId) {
          return {
            ...t,
            text: action.editText,
          };
        } else {
          return t;
        }
      });

    default:
      throw new Error("본적없는 action");
  }
}
