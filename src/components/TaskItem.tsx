import { Task } from "@app/types/task";
import { DeleteIcon } from "./Icons";

interface TaskItemProps extends Task {}

export const TaskItem = ({ title, waitingToBeAdded }: TaskItemProps) => {
  return (
    <div className="bg-violet-500 p-4 rounded-md flex justify-between relative overflow-hidden">
      {title.at(0)?.toUpperCase() + title.slice(1)}
      <span>
        <DeleteIcon />
      </span>
      {waitingToBeAdded && (
        <div className="absolute bg-black opacity-70 inset-0 grid place-items-center">
          <span>Waiting To Be Added!</span>
        </div>
      )}
      {false && (
        <>
          <div className="linear-loader bg-violet-500 rounded absolute right-2 left-2 bottom-[2px]"></div>
          <div className="absolute bg-slate-300 opacity-40 inset-0"></div>
        </>
      )}
    </div>
  );
};
