"use client";

import { TaskApp } from "@app/components/TaskApp";
import { TasksProvider } from "@app/context/TaskContext";
import { WalletProvider } from "@app/context/WalletContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <TasksProvider>
        <WalletProvider>
          <TaskApp />
        </WalletProvider>
      </TasksProvider>
    </main>
  );
}
