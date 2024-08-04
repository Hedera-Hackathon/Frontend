import GuestGuard from "@/guards/guest-guard";
import React from "react";

const layout = ({ children }) => {
  return <GuestGuard>{children}</GuestGuard>;
};

export default layout;
