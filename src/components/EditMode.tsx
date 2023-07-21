import React, { useState } from "react";
import { ModeChange } from "./Todo";
import { TodoType } from "./TodoList";
import useTodo from "@/hook/useTodo";

type Props = {
  todo: TodoType;
  changeMode: ModeChange;
};

export default function EditMode({ todo: { _id, todo }, changeMode }: Props) {
  const [text, setText] = useState(todo);
  const { updateTodo } = useTodo();

  const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const EditTodo = () => {
    updateTodo.mutate({ _id, todo: text });
    changeMode();
  };

  return (
    <li className="flex gap-2">
      <input type="text" onChange={changeInputText} value={text} />
      <button
        onClick={() => {
          changeMode();
          setText("");
        }}
      >
        취소
      </button>
      <button onClick={EditTodo}>수정</button>
    </li>
  );
}
