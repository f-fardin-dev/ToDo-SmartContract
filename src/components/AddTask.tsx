"use client";

import { useRef, useState } from "react";
import { Loader } from "./Icons";
import { addTask } from "@app/Services/connections";
import { useTasksDispatch } from "@app/context/TaskContext";
import { ActionsName } from "@app/types/actions";

export const AddTask = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useTasksDispatch();

  const handleAddTask = async () => {
    if (!inputRef || !inputRef.current?.value) {
      return;
    }
    try {
      setLoading(true);
      const title = inputRef.current?.value;
      await addTask(title);
      // Math.random is not a good option for ID :)
      dispatch({ type: ActionsName.ADD, title, id: Math.random() });
      inputRef.current.value = "";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <input
        ref={inputRef}
        className="text-black p-2 rounded-md grow"
        placeholder="Task Title"
        readOnly={loading}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 rounded-md p-2 flex items-center hover:bg-blue-600 active:bg-blue-500
        disabled:bg-blue-300 disabled:shadow-none justify-center transition-colors"
        disabled={loading}
      >
        {loading && <Loader />}
        Add Task
      </button>
    </div>
  );
};
