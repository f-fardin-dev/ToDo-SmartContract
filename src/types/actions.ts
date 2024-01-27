import { Task } from "./task";

export enum ActionsName {
  ADD = "ADD",
  INSERT_ALL = "INSERT_ALL",
}

interface ActionAdd {
  type: ActionsName.ADD;
  id: number;
  title: string;
}

interface ActionInsertAll {
  type: ActionsName.INSERT_ALL;
  tasks: Task[];
}

export type Action = ActionAdd | ActionInsertAll;
