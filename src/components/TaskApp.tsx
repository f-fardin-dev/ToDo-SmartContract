import { useWallet } from "@app/context/WalletContext";
import { ConnectWallet } from "./ConnectWallet";

export const TaskApp = () => {
  const { account } = useWallet();
  return account ? <span>Task list</span> : <ConnectWallet />;
};
