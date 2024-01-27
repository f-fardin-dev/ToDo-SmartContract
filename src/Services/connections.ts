export const connectWallet = async (): Promise<undefined | string> => {
  try {
    if (typeof window === undefined || !window?.ethereum) {
      console.error("Metamask not detected!");
      return;
    }
    const { ethereum } = window;
    const chainId = await ethereum.request({ method: "eth_chainId" });
    if (chainId !== "0xaa36a7") {
      console.error("Your are not connecting with Sepolia network!");
      return;
    }
    const account = await ethereum.request({ method: "eth_requestAccounts" });
    if (!account.length) {
      console.error("Not founding your account!");
      return;
    }
    return account[0];
  } catch (error) {
    console.error((error as Record<string, string>).message);
    return;
  }
};
