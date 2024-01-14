"use client";

import { Dispatch, createContext, useContext, useReducer } from "react";
import { tasksReducer } from "./reducers";
import { RC } from "@app/types/reactChildren";
import { Action } from "@app/types/actions";
import { Task } from "@app/types/task";

const TasksContext = createContext<Task[]>([]);
const TasksDispatchContext = createContext<Dispatch<Action>>(null!);

export const TasksProvider = ({ children }: RC) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);
