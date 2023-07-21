"use client";
import React from "react";
import TodoList from "../components/TodoList";
import { useRecoilState } from "recoil";
import { todoCountState } from "@/atom/todoCountState";

export default function Home() {
  const [count] = useRecoilState(todoCountState);

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>todo는 {count}개</h1>
      <TodoList />
    </main>
  );
}
