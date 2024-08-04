import Header from "@/components/layout/header";
import React from "react";

const ProjectLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <>{children}</>
    </div>
  );
};

export default ProjectLayout;
