"use client";

import React, { useEffect } from "react";
import useTodo from "../hook/useTodo";
import TodoCreator from "./TodoCreator";
import Todo from "./Todo";
import { useRecoilState } from "recoil";
import { todoCountState } from "@/atom/todoCountState";

export type TodoType = {
  _id: string;
  todo: string;
};

export default function TodoList() {
  const {
    getTodos: { data },
  } = useTodo();
  const [_, setCount] = useRecoilState(todoCountState);

  useEffect(() => {
    setCount(data?.length || 0);
  }, [data?.length, setCount]);

  return (
    <main className="w-[500px] h-[500px] flex flex-col justify-center items-center gap-5">
      <TodoCreator />
      <ul>
        {data?.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
