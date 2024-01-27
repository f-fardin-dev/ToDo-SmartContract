import { Task } from "@app/types/task";
import { DeleteIcon } from "./Icons";

interface TaskItemProps extends Task {}

export const TaskItem = ({ title }: TaskItemProps) => {
  return (
    <div className="bg-violet-500 p-4 rounded-md flex justify-between relative overflow-hidden">
      {title.at(0)?.toUpperCase() + title.slice(1)}
      <span>
        <DeleteIcon />
      </span>
      {false && (
        <>
          <div className="linear-loader bg-violet-500 rounded absolute right-2 left-2 bottom-[2px]"></div>
          <div className="absolute bg-slate-300 opacity-40 inset-0"></div>
        </>
      )}
    </div>
  );
};
