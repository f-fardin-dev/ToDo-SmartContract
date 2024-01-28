"use client";

import { TaskApp } from "@app/components/TaskApp";
import { TasksProvider } from "@app/context/TaskContext";
import { WalletProvider } from "@app/context/WalletContext";
import { SnackbarProvider } from "notistack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <TasksProvider>
        <WalletProvider>
          <SnackbarProvider />
          <TaskApp />
        </WalletProvider>
      </TasksProvider>
    </main>
  );
}
