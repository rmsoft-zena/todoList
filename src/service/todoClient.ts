import { TodoType } from "../components/TodoList";

export default class TodoClient {
  private httpClient: string;
  constructor() {
    this.httpClient = "http://localhost:3000/api/todo";
  }

  public async getTodos() {
    const res = await fetch(this.httpClient).then((res) => res.json());
    const data = await res.data;
    return data;
  }

  public createTodo(todo: string) {
    fetch(this.httpClient, {
      method: "POST",
      body: JSON.stringify(todo),
    });
  }

  public updateTodo(request: updateReq) {
    fetch(`http://localhost:3000/api/todo/${request._id}`, {
      method: "PUT",
      body: JSON.stringify({ todo: request.todo }),
    });
  }

  public deleteTodo(id: string) {
    fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    });
  }
}

type updateReq = TodoType;
