import Header from "@/components/layout/header";
import AuthGuard from "@/guards/auth-guard";
import React from "react";

const ProjectLayout = ({ children }) => {
  return (
    <AuthGuard>
      <Header />
      <>{children}</>
    </AuthGuard>
  );
};

export default ProjectLayout;
