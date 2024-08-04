import { useMutation, useQuery } from "@tanstack/react-query";
import { api, endpoints } from ".";
import { redirect, RedirectType } from "next/navigation";
import { useWriteProjectCreateProject } from "@/hooks/contracts/generated/project";

export const useAddProject = () => {
  const createProject = useWriteProjectCreateProject();
  return useMutation({
    mutationFn: (data: {}) => {
      return api.post(endpoints.projects.add, data);
    },
    onSuccess: () => {
      //   redirect("/projects", RedirectType.push);
    },
  });
};

export const useListProject = () => {
  return useQuery({
    queryKey: ["projects-list"],
    queryFn: () => api.get(endpoints.projects.list),
  });
};
