import useTodo from "@/hook/useTodo";
import React, { useState } from "react";

export default function TodoCreator() {
  const [text, setText] = useState("");
  const { createTodo } = useTodo();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const todoCreator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo.mutate(text);
    setText("");
  };

  return (
    <form onSubmit={todoCreator} className="flex">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChangeInput}
        value={text}
      />
      <button className="btn btn-active btn-neutral">생성</button>
    </form>
  );
}
