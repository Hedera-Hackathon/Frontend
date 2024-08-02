"use client";

import React, { ReactNode } from "react";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import wagmiConfig from "@/config";
import { projectId } from "@/config/config";

const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#4A90E2",
    "--w3m-border-radius-master": "12px",
    "--w3m-button-background-color":
      "linear-gradient(135deg, #4A90E2, #9013FE)",
    "--w3m-button-color": "#FFFFFF",
    "--w3m-button-font-size": "16px",
    "--w3m-button-padding": "12px 24px",
    "--w3m-button-border": "none",
    "--w3m-button-border-radius": "12px",
    "--w3m-button-box-shadow": "0 4px 12px rgba(0, 0, 0, 0.1)",
    "--w3m-button-transition": "all 0.3s ease",
    "--w3m-button-hover-background-color":
      "linear-gradient(135deg, #9013FE, #4A90E2)",
    "--w3m-button-hover-color": "#FFFFFF",
    "--w3m-button-hover-box-shadow": "0 6px 16px rgba(0, 0, 0, 0.2)",
  },
});

export function Web3Modal({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
