import React, { useState } from "react";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { TodoType } from "./TodoList";

type Props = {
  todo: TodoType;
};

export default function Todo({ todo }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);

  const changeMode = () => setIsEditMode(!isEditMode);

  return isEditMode ? (
    <EditMode todo={todo} changeMode={changeMode} />
  ) : (
    <ViewMode todo={todo} changeMode={changeMode} />
  );
}

export type ModeChange = () => void;
