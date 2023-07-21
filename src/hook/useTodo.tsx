import TodoClient from "../service/todoClient";
import { TodoType } from "../components/TodoList";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const todoClient = new TodoClient();

export default function useTodo() {
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries(["todo"]);
  };

  const getTodos: UseQueryResult<TodoType[], unknown> = useQuery(["todo"], () =>
    todoClient.getTodos()
  );

  const createTodo = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: async (text: string) => todoClient.createTodo(text),
    onSuccess: invalidateQuery,
  });

  const updateTodo = useMutation({
    mutationKey: ["updateTodo"],
    mutationFn: async (req: TodoType) => todoClient.updateTodo(req),
    onSuccess: invalidateQuery,
  });

  const deleteTodo = useMutation({
    mutationKey: ["deleteTodo"],
    mutationFn: async (id: string) => todoClient.deleteTodo(id),
    onSuccess: invalidateQuery,
  });

  return { createTodo, updateTodo, deleteTodo, getTodos };
}
