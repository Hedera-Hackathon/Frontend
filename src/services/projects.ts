import { projectContract } from "@/constants/contract";
import { useWriteProjectCreateProject } from "@/hooks/contracts/generated/project";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api, endpoints } from ".";
import { UUID } from "crypto";
import { useContractWrite } from "@/hooks/contracts/generated/custom-contracts/project";

export const useAddProjectContract = () => {
  const contract = useContractWrite();

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
      return contract.mutate({
        functionName: "createProject",
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
