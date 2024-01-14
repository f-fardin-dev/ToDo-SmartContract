import { Task } from "@app/types/task";
import { Action, ActionsName } from "@app/types/actions";

export const tasksReducer = (tasks: Task[], action: Action) => {
  switch (action.type) {
    case ActionsName.ADD:
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          waitingToBeAdded: true,
          waitingToBeDeleted: false,
        },
      ];
    case ActionsName.DELETE:
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, waitingToBeDeleted: true };
        }
        return task;
      });
    case ActionsName.INSERT_ALL:
      return [...action.tasks];
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};
