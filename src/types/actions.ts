import { Task } from "./task";

export enum ActionsName {
  ADD = "ADD",
  DELETE = "DELETE",
  INSERT_ALL = "INSERT_ALL",
}

interface ActionAdd {
  type: ActionsName.ADD;
  id: number;
  title: string;
}

interface ActionDelete {
  type: ActionsName.DELETE;
  id: number;
}

interface ActionInsertAll {
  type: ActionsName.INSERT_ALL;
  tasks: Task[];
}

export type Action = ActionAdd | ActionDelete | ActionInsertAll;
