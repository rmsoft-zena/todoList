import React from "react";
import { ModeChange } from "./Todo";
import useTodo from "../hook/useTodo";
import { TodoType } from "./TodoList";

type Props = {
  todo: TodoType;
  changeMode: ModeChange;
};

export default function ViewMode({ todo: { _id, todo }, changeMode }: Props) {
  const { deleteTodo } = useTodo();

  return (
    <li className="flex gap-2">
      <p>{todo}</p>
      <button onClick={changeMode}>수정</button>
      <button onClick={() => deleteTodo.mutate(_id)}>삭제</button>
    </li>
  );
}
