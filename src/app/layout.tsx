import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RC } from "@app/types/reactChildren";
import { TasksProvider } from "@app/context/TaskContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo Smart Contract",
  description: "A todo app that uses smart contract on Sepolia test-net",
};

export default function RootLayout({ children }: RC) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TasksProvider>{children}</TasksProvider>
      </body>
    </html>
  );
}
