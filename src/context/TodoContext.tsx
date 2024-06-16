import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import todoReducer, { Action } from "../reducer/todoReducer";
import { TodoType } from "../components/Todo";

const TodosContext = createContext<TodoType[]>([]);
const TodoDispatchContext = createContext<Dispatch<Action>>(() => {});

const initialTodo = [
  { id: 1, text: "todo 만들기", isCompleted: false },
  { id: 2, text: "todo 보기", isCompleted: false },
  { id: 3, text: "todo 리팩토링하기", isCompleted: false },
];

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  return (
    <TodosContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
