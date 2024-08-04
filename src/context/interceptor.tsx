"use client";

import { api } from "@/services";
import { AxiosHeaderValue } from "axios";
import React from "react";
import { useAccount } from "wagmi";

const Interceptor = ({ children }) => {
  const { address } = useAccount();
  api.defaults.headers.walletaddress = address as AxiosHeaderValue;
  return <div>{children}</div>;
};

export default Interceptor;
