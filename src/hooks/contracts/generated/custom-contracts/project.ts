import { projectAbi } from "@/abis";
import { projectContract } from "@/constants/contract";
import { ContractWrite } from "@/types/contract";
import { useMutation } from "@tanstack/react-query";
import { useReadContract, useWalletClient } from "wagmi";

type WriteContractParams = {
  functionName: ContractWrite;
  args: any;
};

export const useContractWrite = () => {
  const { data: walletClient } = useWalletClient();
  const mutate = async ({ functionName, args }: WriteContractParams) => {
    try {
      const response = await walletClient?.writeContract({
        address: projectContract,
        functionName,
        args,
        abi: projectAbi,
      });
      return response;
    } catch (error) {
      console.error("Contract write failed", error);
      throw error;
    }
  };
  return { mutate };
};

export const useContractRead = (functionName: any, args?: any) => {
  return useReadContract({
    abi: projectAbi,
    address: projectContract,
    functionName,
    args,
  });
};

export const useCreateProjectContract = () => {
  const contract = useContractWrite();

  return useMutation({
    mutationKey: ["createProject"],
    mutationFn: async ({
      name,
      tokenName,
      tokenSymbol,
    }: {
      name: string;
      tokenName: string;
      tokenSymbol: string;
    }) => {
      return contract.mutate({
        functionName: "createProject",
        args: [name, tokenName, tokenSymbol],
      });
    },
  });
};
