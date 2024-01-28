"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { RC } from "@app/types/reactChildren";
import { Wallet } from "@app/types/wallet";
import { connectWallet } from "@app/Services/connections";

const initialValue: Wallet = {
  isMetamaskAvailable: false,
  isConnected: false,
  balance: 0,
};

const WalletContext = createContext<Wallet>(initialValue);

export const WalletProvider = ({ children }: RC) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === undefined) {
      return;
    }
    const isMetamaskAvailable = !!window?.ethereum;

    if (!isMetamaskAvailable) {
      setData((data) => ({ ...data, isMetamaskAvailable }));
      setLoading(() => false);
      return;
    }

    const checkConnection = async () => {
      const account = await connectWallet();
      setData((data) => ({
        ...data,
        isMetamaskAvailable,
        isConnected: account ? window.ethereum.isConnected() : false,
        account: account ? (account as string) : undefined,
      }));
      setLoading(() => false);
    };

    const onAccountsChanged = async (accounts: Array<string>) => {
      if (!accounts.length) {
        setData((data) => ({
          ...data,
          isConnected: false,
          account: undefined,
        }));
      } else {
        const account = await connectWallet();
        setData((data) => ({
          ...data,
          isConnected: !!account,
          account: account ? (account as string) : undefined,
        }));
      }
    };

    window.ethereum.on("accountsChanged", onAccountsChanged);

    if (window.ethereum._state.accounts?.length) {
      checkConnection();
    } else {
      setData((data) => ({ ...data, isMetamaskAvailable }));
      setLoading(() => false);
    }

    return () => {
      window.ethereum.removeAllListeners("accountsChanged");
    };
  }, []);

  return (
    <WalletContext.Provider value={data}>
      {loading ? (
        <span className="my-auto">Loading data ..., please wait!</span>
      ) : (
        children
      )}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
