"use client";

import { getAllTask, getContract } from "@app/Services/connections";
import { useTasks, useTasksDispatch } from "@app/context/TaskContext";
import { ActionsName } from "@app/types/actions";
import { ethers } from "ethers";
import { useEffect } from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  useEffect(() => {
    let taskContract: ethers.Contract;
    const fetchTasks = async () => {
      const tasks = await getAllTask();
      if (tasks.length) {
        dispatch({ type: ActionsName.INSERT_ALL, tasks });
      }
    };
    const fetchContract = async () => {
      const contract = await getContract();
      if (!contract) return;
      taskContract = contract;
      taskContract.on("taskAdded", () => {
        fetchTasks();
      });
      taskContract.on("taskDeleted", () => {
        fetchTasks();
      });
    };
    fetchTasks();
    fetchContract();

    return () => {
      taskContract?.removeAllListeners("taskAdded");
      taskContract?.removeAllListeners("taskDeleted");
    };
  }, [dispatch]);

  return (
    <div
      className="h-[calc(100vh-10.4rem)] p-8 mt-3 rounded-md bg-slate-500 w-full overflow-y-auto
    flex flex-col gap-2
    "
    >
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </div>
  );
};
