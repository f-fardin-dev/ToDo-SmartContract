import { Task } from "@app/types/task";
import { DeleteIcon } from "./Icons";
import { deleteTask } from "@app/Services/connections";
import { useState } from "react";

interface TaskItemProps extends Task {}

export const TaskItem = ({ id, title, waitingToBeAdded }: TaskItemProps) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteTask = async () => {
    setDeleteLoading(true);
    try {
      const result = await deleteTask(id);
      if (!result) {
        setDeleteLoading(false);
      }
    } catch (err) {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="bg-violet-500 p-4 rounded-md flex justify-between relative overflow-hidden min-h-14">
      {title?.at(0)?.toUpperCase() + title?.slice(1)}
      <span onClick={handleDeleteTask}>
        <DeleteIcon />
      </span>
      {waitingToBeAdded && (
        <div className="absolute bg-black opacity-70 inset-0 grid place-items-center">
          <span>Waiting To Be Added!</span>
        </div>
      )}
      {deleteLoading && (
        <>
          <div className="linear-loader bg-violet-500 rounded absolute right-2 left-2 bottom-[2px]"></div>
          <div className="absolute bg-slate-300 opacity-40 inset-0"></div>
        </>
      )}
    </div>
  );
};
