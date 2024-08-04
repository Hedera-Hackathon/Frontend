"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const AuthGuard = ({ children }) => {
  const { isConnected, isConnecting } = useAccount();
  console.log("isConnected", isConnected);
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("/login");
    }
  });

  if (isConnecting) return "Loading";
  if (isConnected) return <div>{children}</div>;
};

export default AuthGuard;
