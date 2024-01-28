import { useWallet } from "@app/context/WalletContext";
import { ConnectWallet } from "./ConnectWallet";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

export const TaskApp = () => {
  const { account, isMetamaskAvailable } = useWallet();

  if (!isMetamaskAvailable) {
    return <div className="my-auto">Metamask is not installed!</div>;
  }
  return account ? (
    <div className="p-2 w-full md:max-w-3xl">
      <AddTask />
      <TaskList />
    </div>
  ) : (
    <ConnectWallet />
  );
};
