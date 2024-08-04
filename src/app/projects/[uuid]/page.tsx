"use client";
import { useProject } from "@/services/projects";
import { UUID } from "crypto";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { uuid } = useParams();
  const project = useProject(uuid as UUID);
  console.log("project", project);
  return <div>Page</div>;
};

export default Page;
