"use client";

import { connectWallet } from "@app/Services/connections";

export const ConnectWallet = () => {
  const handleConnectWallet = async () => {
    await connectWallet();
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center my-auto">
      <button
        className="bg-orange-600 p-2 rounded-md hover:scale-105 active:scale-100"
        onClick={handleConnectWallet}
      >
        Connect Wallet
      </button>
      <span className="text-center">
        Please connect your wallet to the Sepolia test-net by clicking the
        button above. You are not yet connected.
      </span>
    </div>
  );
};
