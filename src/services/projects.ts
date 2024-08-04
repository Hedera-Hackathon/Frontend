import { projectContract } from "@/constants/contract";
import { useWriteProjectCreateProject } from "@/hooks/contracts/generated/project";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api, endpoints } from ".";
import { UUID } from "crypto";

export const useAddProject = () => {
  const createProject = useWriteProjectCreateProject();
  return useMutation({
    mutationFn: async ({
      name,
      tokenName,
      tokenSymbol,
    }: {
      name: string;
      tokenName: string;
      tokenSymbol: string;
      description: string;
      rwaRepresentation: string;
      imageUrl: string;
      tokenQuantity: string;
    }) => {
      return createProject.writeContractAsync({
        address: projectContract,
        args: [name, tokenName, tokenSymbol],
      });
    },
    onSuccess: (
      tokenAddress,
      {
        name,
        tokenName,
        tokenSymbol,
        description,
        imageUrl,
        rwaRepresentation,
        tokenQuantity,
      }
    ) => {
      return api.post(endpoints.projects.add, {
        name,
        tokenName,
        tokenSymbol,
        description,
        imageUrl,
        rwaRepresentation,
        tokenQuantity,
        contractAddress: tokenAddress,
      });
    },
  });
};

export const useListProject = () => {
  return useQuery({
    queryKey: ["projects-list"],
    queryFn: () => api.get(endpoints.projects.list),
  });
};

export const useProject = (uuid: UUID) => {
  return useQuery({
    queryKey: ["project", uuid],
    queryFn: () => api.get(endpoints.projects.single(uuid)),
  });
};
