export interface Wallet {
  isMetamaskAvailable: boolean;
  isConnected: boolean;
  balance: number;
  account?: string;
}
