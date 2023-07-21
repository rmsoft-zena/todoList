import { TodoType } from "../src/components/TodoList";

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
    fetch("http://localhost:3000/api/todo", {
      method: "PUT",
      body: JSON.stringify(request),
    });
  }

  public deleteTodo(id: number) {
    fetch("http://localhost:3000/api/todo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  }
}

type updateReq = TodoType;
